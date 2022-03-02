import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoService } from './produtos.service';
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoteamentoModule } from "./produtos.route";
import { ProdutoDetalheComponent } from "./produto-dashboard/componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./produto-dashboard/componentes/produto-count.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ListaProdutoComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent        
    ],
    imports: [
        CommonModule, 
        ProdutoRoteamentoModule        
    ],
    exports: [        
    ],
    providers: [
        ProdutoService
    ]
})
export class ProdutosModule{}