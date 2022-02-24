import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { DataBindingComponent } from './apps/data-binding/data-binding.component';
import { ProdutoService } from './apps/arquitetura-componentes/produtos/produtos.service';
import { ListaProdutoComponent } from './apps/arquitetura-componentes/produtos/lista-produto/lista-produto.component';
//REACTIVE FORMS
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
//MODULARIZACAO DE COMPONENTS
import { AppRoteamentoModule } from './app.routes';
//MODULARIZACAO DE ROTAS
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent,   
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
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
