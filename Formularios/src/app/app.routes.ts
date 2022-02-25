import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const rootRouterConfig: Routes = [
    //{ path: '', redirectTo: '/loja', pathMatch: 'full'},  //REDIRECIONAMENTO
    { path: '', //CARRGANDO EM LAZY LOADING O MODULO DE ROTA PARA PRODUTOS
        loadChildren: () => import('./navegacao/navegacao.module')
        .then(modulaoo => modulaoo.NavegacaoModule) }
];

@NgModule({
    imports: [
    RouterModule.forRoot(rootRouterConfig) //USADO NESTE APP ROOT
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoteamentoPrincipalModule{}