import { IList } from "./IList";

export class ArrayList implements IList{

    private items: any[];

    constructor(){
        this.items = [];
    }

    add(item:any): void{
        this.items.push(item);
    }

    addFirst(item: any): void {
        this.items.unshift(item);
    }
    addAt(index:number,item: any): void {
        if(index >= 0 && index <= this.items.length){
            this.items.splice(index,0,item);
        }else{
            throw new Error("Index out of bounds.");
        }
    }

    remove(item:any): void{
        const index = this.items.indexOf(item);
        if(index !== -1){
            this.items.splice(index,1);
        }
    }

    removeFirst():void {
        if(!this.isEmpty()) {
            this.items.shift();
        }

    }

    removeLast():void{
        if(!this.isEmpty()){
            this.items.pop();
        }
    }

    removeAt(index:number): void{
        if(index >= 0 && index <= this.items.length){
        this.items.splice(index,1)
        }else {
            throw Error("Index out of bounds.")
        }

    }

    get(index:number): any | null{
        if(index >= 0 && index <= this.items.length){
            return this.items[index];
        } return null
    }

    indexOf(item: any): number {
        return this.items.indexOf(item);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
    listSize(): number {
        return this.items.length;
    }
}
