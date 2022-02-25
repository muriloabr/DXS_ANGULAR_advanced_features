import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoService } from './produtos/lista-produto/produtos.service';
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { ProdutoDashboardComponent } from "./produtos/produto-dashboard/produto-dashboard.component";
import { ProdutoRoteamentoModule } from "./produtos.route";

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ListaProdutoComponent        
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