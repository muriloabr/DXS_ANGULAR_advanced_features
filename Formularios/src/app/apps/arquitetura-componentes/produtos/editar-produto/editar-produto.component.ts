import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: 'editar-produto.component.html'
})

export class EditarProdutoComponent implements OnInit {

  produto!: Produto;

  constructor(private rota: ActivatedRoute, //PEGAR DADOS DA ROTA ATIVA, QUE É DIFERENTE DA ROTA
     private produtoServico: ProdutoService) {  // ProdutoService INJETADO POR DEPENDENCIA
  }

  ngOnInit(): void {
    this.rota.params //SUBS PARA QUANDOU HOUVER PARAMETROS DISPONÍVEIS REALIZAR A TAREFA
    .subscribe(      
      {
        next: parametros => {
          this.produtoServico.obterPorId(parametros['id'])
          .subscribe ( 
            {
              next: produtos => {
                this.produto = produtos[0];
                console.log(produtos);
              },
              error: error => console.log(error),
              complete: () => console.log('SUCESSO PRODUTO RECEBIDO DE FORA!')
            }
          )
        },      
        error: error => console.log(error),
        complete: () => console.log('PARAMETRO ENVIADO COMO FATOR DE BUSCA E ETAPA DE RECEPÇÃO DE DADOS REALIZADA COM SUCESSO!')
    });
  }
}
