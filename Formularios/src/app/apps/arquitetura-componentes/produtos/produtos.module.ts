import { NgModule } from "@angular/core";
import { ProdutoService } from './produtos.service';
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoteamentoModule } from "./produtos.route";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ListaProdutoComponent        
    ],
    imports: [
        ProdutoRoteamentoModule,
        BrowserModule
    ],
    exports: [        
    ],
    providers: [
        ProdutoService
    ]
})
export class ProdutosModule{}