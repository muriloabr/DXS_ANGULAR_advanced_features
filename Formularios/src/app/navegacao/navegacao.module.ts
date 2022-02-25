import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//NAVEGACAO MODULO CUSTOM
import { NavegacaoRoteamentoModule } from "./navegacao.route";
//SPA
import { CorpoComponent } from "./corpo/corpo.component";
import { ListaAppsComponent } from "./lista-apps/lista-apps.component";

@NgModule({
    declarations: [ //COMPONMENTES QUE VOU USAR NESTE MODULO
        CorpoComponent,
        ListaAppsComponent
    ],
    imports: [
        CommonModule,
        NavegacaoRoteamentoModule
    ],
    exports: [  
    ]
})
export class NavegacaoModule{}