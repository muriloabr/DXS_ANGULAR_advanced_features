//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//DATA-BINDING
//SPA
import { CorpoComponent } from "./corpo/corpo.component";
import { ListaAppsComponent } from "./lista-apps/lista-apps.component";
import { ContatoComponent } from '../institucional/contato/contato.component';
import { SobreComponent } from '../institucional/sobre/sobre.component';

export const RouterConfig: Routes = [
    { path: '', component: CorpoComponent , children: [
       { path: '', component: ListaAppsComponent },
       //ROTA EM LAZY LOADING CARREGANDO SOMENTE UM .JS EXCLUSIVO POR MODULO AO SER ACESSADO
    { path: 'produtos', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA PRODUTOS
    loadChildren: () => import('../apps/arquitetura-componentes/produtos.module')
    .then(modulaoo => modulaoo.ProdutosModule) },
    { path: 'cadastros', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA CADASTROS
    loadChildren: () => import('../apps/reactive-forms/cadastro.module')
    .then(modulaoo => modulaoo.CadastrosModule) },
    { path: 'databinding', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA DATA-BINDING
    loadChildren: () => import('../apps/alguns-apps.module')
    .then(modulaoo => modulaoo.AlgunsAppsModule) },
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent}  
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(RouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class NavegacaoRoteamentoModule{}