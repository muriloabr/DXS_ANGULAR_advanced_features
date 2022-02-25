import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AlgunsAppsRoteamentoModule } from "./alguns-apps.route";
//DATA-BINDING
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
    declarations: [
        DataBindingComponent    
    ],
    imports: [
        CommonModule,
        FormsModule,
        AlgunsAppsRoteamentoModule
    ],
    exports: [

    ]
})
export class AlgunsAppsModule{}