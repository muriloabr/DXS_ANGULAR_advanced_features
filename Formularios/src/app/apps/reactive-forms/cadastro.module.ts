import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//CADASTROS REACTIVE FORMS
import { Cadastro2Component } from "./cadastro/cadastro2.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
//ROTA MOLDULAR CUSTOMIZADA
import { CadastroRoteamentoModule } from "./cadastro.route";
import { ReactiveFormsModule } from "@angular/forms";
//REACTIVE FORMS
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
    declarations: [
        Cadastro2Component,
        CadastroComponent,
        CadastroComponent,
        Cadastro2Component,
       
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,    
        HttpClientModule,
        NgBrazil,
        TextMaskModule,
        CustomFormsModule,
        CadastroRoteamentoModule
    ],
    exports: [

    ]
})
export class ProdutoModule{}