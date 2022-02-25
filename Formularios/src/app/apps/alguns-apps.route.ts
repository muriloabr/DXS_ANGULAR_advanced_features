//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//DATA-BINDING
import { DataBindingComponent } from './data-binding/data-binding.component';

export const produtoRouterConfig: Routes = [
    { path: '', component: DataBindingComponent},
    //{ path: '', redirectTo: '/data-binding', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AlgunsAppsRoteamentoModule{}