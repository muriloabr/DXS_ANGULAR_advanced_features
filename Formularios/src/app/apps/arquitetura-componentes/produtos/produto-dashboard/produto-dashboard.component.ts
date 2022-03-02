import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { ProdutoDetalheComponent } from '../detalhe-produto/produto-card-detalhe.component';
import { ProdutoCountComponent } from './produto-count.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './produto-dashboard.component.html'
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  constructor(private produtoService: ProdutoService) { }

  //ACESSO DO VIEWCHILD DEVE SER AQUI APÓS CARREGAR TUDO E INICIALIZAR
  ngAfterViewInit(): void {
    //VIEWCHILD CAPTURA UM COMPONENTE DA TELA E PODEMOS ACESSAR OS ATRIBUTOS E METODOS DA CLASSE DELE
    let clickTitulo: Observable<any> = fromEvent(this.tituloPg.nativeElement, 'click');
    clickTitulo.subscribe(() => { alert('DXS| TEMOS: ' + this.contador.contadorProdutosAtivos() + " PRODUTOS ATIVOS!"); return;});
    this.produtosDaLoja.forEach((item) => {
      console.log(item.produto.nome);
    });
  }

  public produtos: Produto[] = [];

  //CHILD = UM ELEMENTO
  @ViewChild('tituloPagina', { static: false }) tituloPg!: ElementRef;
  @ViewChild(ProdutoCountComponent, {static: false}) contador!: ProdutoCountComponent;
  //CHILDREN = TODOS ELEMENTOS
  @ViewChildren(ProdutoDetalheComponent) produtosDaLoja!: QueryList<ProdutoDetalheComponent>;

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe( 
        {
          next: produtos => {
            this.produtos = produtos;
            console.log(produtos);
          },
          error: error => console.log(error),
          complete: () => console.log('SUCESSO PRODUTOS RECEBIDOS!')
        }
      );
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }
}