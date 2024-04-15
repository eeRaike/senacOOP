import { SaborPizza } from "./SaborPizza";
import { Tamanho } from "./Tamanho";

export class Pizza {
    sabor: SaborPizza;
    tamanho: Tamanho;
    preco: Number;

    constructor(in_sabor: SaborPizza,in_tamanho:Tamanho,in_preco:Number){
        this.sabor = in_sabor;
        this.tamanho = in_tamanho;
        this.preco = in_preco;

    }
    pizzaDesc():void{
        console.log(  `Pizza tamanho: ${this.tamanho} Sabor: ${this.sabor} Preco: ${this.preco}`);
       
    }
}