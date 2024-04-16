import { pedido } from "./pedido";

export class ListaCozinha {
    items: pedido[] = [];
    lastPrio1: number = 0
    lastPrio2: number = 0
    lastPrio3: number = 0
    
    checkPrio(in_pedido:pedido){
        if(this.isEmpty()){
            this.items.push(in_pedido)
            if(in_pedido.priority === 1){
                this.lastPrio1 = this.items.indexOf(in_pedido)
            }else if(in_pedido.priority === 2){
                this.lastPrio2 = this.items.indexOf(in_pedido)
            }else if(in_pedido.priority === 3){
                this.lastPrio3 = this.items.indexOf(in_pedido)
            }
        }else if(in_pedido.priority === 1){
            this.addAt(this.lastPrio1 + 1,in_pedido)
            this.lastPrio1 = this.items.indexOf(in_pedido)
        }else if(in_pedido.priority === 2){
            this.addAt(this.lastPrio2 + 1,in_pedido)
            this.lastPrio2 = this.items.indexOf(in_pedido)
        }else{
          this.items.push(in_pedido)
        }
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    addAt(index:number,item: any): void {
        if(index >= 0 && index <= this.items.length){
            this.items.splice(index,0,item);
       }else{
            throw new Error("Index out of bounds.");
        }
    }
}