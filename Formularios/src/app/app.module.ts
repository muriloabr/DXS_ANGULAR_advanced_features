import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

//COMPONENT BASE
import { AppComponent } from './app.component';
//SPA
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component'; 
import { DataBindingComponent } from './apps/data-binding/data-binding.component';
import { ProdutoService } from './apps/arquitetura-componentes/produtos/lista-produto/produtos.service';
import { ListaProdutoComponent } from './apps/arquitetura-componentes/produtos/lista-produto/lista-produto.component';
import { AppRoteamentoPrincipalModule } from './app.routes';
//import { rootRouterConfig } from './app.routes'; //REMOVO PARA MODULARIZAR ISSO
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
    AppRoteamentoPrincipalModule 
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})] //REMOVIDO PARA MODULARIZAÇÃO DISSO
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
