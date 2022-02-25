import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
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
    BrowserModule,    
    AppRoteamentoPrincipalModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
