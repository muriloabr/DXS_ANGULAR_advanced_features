import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
//COMPONENT BASE
import { AppComponent } from './app.component';
import { AppRoteamentoPrincipalModule } from './app.routes';
//SPA
import { MenuComponent } from "./navegacao/menu/menu.component";
import { RodapeComponent } from "./navegacao/rodape/rodape.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoteamentoPrincipalModule
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'} //ACESSO DIRETO PELA ESCRITA DA ROTA NÃO RODA, ENTÃO REMOVE ISSO E POE NO HTML SÓ
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
