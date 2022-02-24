import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produtos/produto-dashboard/produto-dashboard.component";
import { ProdutoRoteamentoModule } from "./produto.route";

@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule, 
        ProdutoRoteamentoModule
    ],
    exports: [    
        ProdutoDashboardComponent    
    ]
})
export class ProdutoModule{}