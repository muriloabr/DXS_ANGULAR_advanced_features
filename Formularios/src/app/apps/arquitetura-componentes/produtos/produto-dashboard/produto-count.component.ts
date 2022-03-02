import { Component, Input } from "@angular/core";
import { Produto } from "../produto";

@Component ({
    selector: 'produto-count',
    template: `
        <div>
            <h3>Produtos</h3>
            <div>
                Produtos Ativos: {{contadorProdutosAtivos()}} no total de {{this.produtos.length}} produtos.<br><br>
            </div>
        </div>
    `
})
export class ProdutoCountComponent{
    @Input()
    produtos!: Produto[];

    contadorProdutosAtivos(): number {
        if(this.produtos.length < 1){ //LENDO A QUANTIDADE DE PRODUTOS RECEBIDOS PELO INPUT DE DADOS EXTERNOS
            return 0;
        } else {
            return this.produtos.filter((produto: Produto) => produto.ativo).length
        }
    }
}