import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoService } from './produtos.service';
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoteamentoModule } from "./produtos.route";
import { ProdutoDetalheComponent } from "./detalhe-produto/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./produto-dashboard/produto-count.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoDashboardAppComponent } from "./produto-dashboard/produto-dashboard.app.component";

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardAppComponent,
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