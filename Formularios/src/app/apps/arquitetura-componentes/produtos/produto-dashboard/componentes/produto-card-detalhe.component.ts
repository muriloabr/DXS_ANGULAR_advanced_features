import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Produto } from "../../produto";

@Component ({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})
export class ProdutoDetalheComponent{
    @Input() //INPUT USA PROPERTY BINDING
    produto!: Produto;
    @Output() //OUTPUT USA EVENT BINDING
    status: EventEmitter<any> = new EventEmitter();
    
    emitirEvento(){
        this.status.emit(this.produto);
    }
}