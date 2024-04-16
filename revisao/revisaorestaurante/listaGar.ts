import { pedido } from "./pedido";

export class listaGar {
    items: pedido[] = [];


    listInsert(in_pedido:pedido){
        in_pedido.setPriority()
        this.items.push(in_pedido)
        
    }
    temp_prioCheck(){
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].priority);
            
            
        }
        
    }

    
}