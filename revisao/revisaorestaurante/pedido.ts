import { tipoPedido } from "./tipoPedido";

export class pedido {
    name: String;
    type: tipoPedido;
    priority: Number;

    constructor(in_name:String,in_type:tipoPedido){
        this.name = in_name;
        this.type = in_type;
    }


    setPriority():void{
        if(this.type === tipoPedido.bebida){
            this.priority = 1
        } else if(this.type === tipoPedido.pratoPrinc){
            this.priority = 2
        } else if(this.type === tipoPedido.sobremesa){
            this.priority = 3
        }
    }
}