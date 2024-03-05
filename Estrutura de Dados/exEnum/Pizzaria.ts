import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";

const pizza1 = new Pizza(SaborPizza.sabor1,"Grande",75.99)
const pizza2 = new Pizza(SaborPizza.sabor2,"Média",60.99)
const pizza3 = new Pizza(SaborPizza.sabor3,"Pequena",50.99)

console.log(pizza1,pizza2,pizza3);
