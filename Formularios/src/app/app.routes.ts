import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './apps/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CorpoComponent } from './navegacao/corpo/corpo.component';
import { ListaProdutoComponent } from './apps/arquitetura-componentes/produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/loja', pathMatch: 'full'},  //REDIRECIONAMENTO
    //ROTA SIMPLES
    { path: 'loja', component: CorpoComponent}, 
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'apps', component: DataBindingComponent},
    { path: 'produtos', component: ListaProdutoComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent},
    //ROTA EM LAZY LOADING CARREGANDO SOMENTE UM .JS EXCLUSIVO POR MODULO AO SER ACESSADO
    { path: 'produtos', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA PRODUTOS
        loadChildren: () => import('./apps/arquitetura-componentes/produto.module')
        .then(modulaoo => modulaoo.ProdutoModule) },
    { path: 'cadastro', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA CADASTROS
    loadChildren: () => import('./apps/reactive-forms/cadastro.module')
    .then(modulaoo => modulaoo.ProdutoModule) }
];

@NgModule({
    imports: [
    RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoteamentoModule{}