//ROTA CUSTOMIZADA
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//CADASTROS REACTIVE FORMS
import { Cadastro2Component } from "./cadastro/cadastro2.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

export const produtoRouterConfig: Routes = [
    { path: '/cadastro2', component: Cadastro2Component},
    { path: '/cadastro', component: CadastroComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class CadastroRoteamentoModule{}