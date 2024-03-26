import { pedidoFilaInterface } from "./pedidoFilaInterface";

export class pedidoFila implements pedidoFilaInterface {
    private items: any[]; 
    indexP1: number;
    indexP2: number;
    indexP3: number;

    constructor() {
        this.items = []; 
    }

    
    enqueue(item: any): void {
        this.items.push(item);
    }

    addAt(index:number,item: any): void {
        if(index >= 0 && index <= this.items.length){
            this.items.splice(index,0,item);
        }else{
            throw new Error("Index out of bounds.");
        }
    }

   
    dequeue(): any | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

   
    peek(): any | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    
    getSize(): number {
        return this.items.length;
    }

 
    isEmpty(): boolean {
        return this.items.length === 0;
}
}