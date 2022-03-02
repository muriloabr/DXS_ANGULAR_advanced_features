//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoDetalheComponent } from "./detalhe-produto/produto-card-detalhe.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { ProdutoDashboardAppComponent } from "./produto-dashboard/produto-dashboard.app.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

export const produtoRouterConfig: Routes = [
    //AO ACESSAR PRODUTOS SIGO PARA O DASHBOARD COMO PADRAO
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    //DASHBOARD TEM LINKS CHILDRENS       
    { path: 'dashboard', component: ProdutoDashboardAppComponent,
        children: [
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: EditarProdutoComponent },
            { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
        ]
    },
    //WEBCOMMERCE TEM LINKS CHILDRENS         
    { path: 'webcommerce', component: ListaProdutoComponent,
        children: [
            { path: '', component: ListaProdutoComponent },
            { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
        ]
    }   
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig) //PARA RESPONDER AOS CAMINHOS DENTRO DO QUE TROUXE ATE AQUI PRODUTOS/*
    ],
    exports: [RouterModule]
})
export class ProdutoRoteamentoModule{}