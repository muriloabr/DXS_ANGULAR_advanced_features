//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoDashboardComponent } from "./produtos/produto-dashboard/produto-dashboard.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";

export const produtoRouterConfig: Routes = [
    { path: 'dashboard', component: ProdutoDashboardComponent},
    { path: 'webcommerce', component: ListaProdutoComponent},
    { path: 'webcommerce/produto-detalhe/:id', component: ListaProdutoComponent},
    { path: '', component: ListaProdutoComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoteamentoModule{}