import { SaborPizza } from "./SaborPizza"

export class Pizza {

    sabor: SaborPizza
    tamanho: String
    preco: Number

    constructor(sabor,tamanho,preco){
        this.sabor = sabor,
        this.tamanho = tamanho,
        this.preco = preco
    }

     desc():string {
        return `Pizza ${this.sabor}, Tamanho ${this.sabor},Preço${this.preco.toFixed(2)}`
    }

    
    }

