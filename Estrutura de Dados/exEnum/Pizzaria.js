"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var SaborPizza_1 = require("./SaborPizza");
var pizza1 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor1, "Grande", 75.99);
var pizza2 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor2, "Média", 60.99);
var pizza3 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor3, "Pequena", 50.99);
console.log(pizza1, pizza2, pizza3);
