import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//CADASTROS REACTIVE FORMS
import { Cadastro2Component } from "./cadastro/cadastro2.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
//ROTA MOLDULAR CUSTOMIZADA
import { CadastroRoteamentoModule } from "./cadastro.route";

@NgModule({
    declarations: [
        Cadastro2Component,
        CadastroComponent,
        CadastroComponent,
        Cadastro2Component
    ],
    imports: [
        CommonModule, 
        CadastroRoteamentoModule
    ],
    exports: [

    ]
})
export class ProdutoModule{}