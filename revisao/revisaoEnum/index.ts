import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";
import { Tamanho } from "./Tamanho";

const pizza1 = new Pizza(SaborPizza.sabor1,Tamanho.tamanho1,30)
const pizza2 = new Pizza(SaborPizza.sabor2,Tamanho.tamanho2,45)
const pizza3 = new Pizza(SaborPizza.sabor3,Tamanho.tamanho3,60)
const pizza4 = new Pizza(SaborPizza.sabor4,Tamanho.tamanho3,60)

pizza1.pizzaDesc()
pizza2.pizzaDesc()
pizza3.pizzaDesc()
pizza4.pizzaDesc()