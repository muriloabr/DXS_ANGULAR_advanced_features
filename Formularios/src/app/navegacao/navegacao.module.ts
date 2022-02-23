import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
//SPA
import { CorpoComponent } from "./corpo/corpo.component";
import { MenuComponent } from "./menu/menu.component";
import { RodapeComponent } from "./rodape/rodape.component";


@NgModule({
    declarations: [
        CorpoComponent,
        MenuComponent,
        RodapeComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [  //compartilho o import e uso desses componentes com o mundo
        CorpoComponent,
        MenuComponent,
        RodapeComponent
    ]
})
export class NavegacaoModule{}