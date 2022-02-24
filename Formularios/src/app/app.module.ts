import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

//COMPONENTS
import { AppComponent } from './app.component';
//SPA
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
//import { rootRouterConfig } from './app.routes'; //REMOVO PARA MODULARIZAR ISSO 
import { DataBindingComponent } from './aplications/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
//REACTIVE FORMS
import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';
import { Cadastro2Component } from './reactiveForms/cadastro/cadastro2.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
//MODULARIZACAO DE COMPONENTS
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoteamentoModule } from './app.routes';
//MODULARIZACAO DE ROTAS


@NgModule({
  declarations: [
    AppComponent,   
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
    Cadastro2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoteamentoModule 
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})] //REMOVIDO PARA MODULARIZAÇÃO DISSO
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
