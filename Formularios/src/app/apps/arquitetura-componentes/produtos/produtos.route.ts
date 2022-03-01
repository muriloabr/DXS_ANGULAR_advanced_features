//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";

export const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent},
    { path: 'dashboard', component: ProdutoDashboardComponent},
    { path: 'webcommerce', component: ListaProdutoComponent},
    { path: 'webcommerce/produto-detalhe/:id', component: ListaProdutoComponent}    
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig) //PARA RESPONDER AOS CAMINHOS DENTRO DO QUE TROUXE ATE AQUI PRODUTOS/*
    ],
    exports: [RouterModule]
})
export class ProdutoRoteamentoModule{}