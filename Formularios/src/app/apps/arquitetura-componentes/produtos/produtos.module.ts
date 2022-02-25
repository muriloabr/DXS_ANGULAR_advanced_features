import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoService } from './lista-produto/produtos.service';
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
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