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
import { MenuComponent } from './navegacao/menu/menu.component';
import { CorpoComponent } from './navegacao/corpo/corpo.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './aplications/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
//REACTIVE FORMS
import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
