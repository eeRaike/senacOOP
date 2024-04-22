"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var SaborPizza_1 = require("./SaborPizza");
var Tamanho_1 = require("./Tamanho");
var pizza1 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor1, Tamanho_1.Tamanho.tamanho1, 30);
var pizza2 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor2, Tamanho_1.Tamanho.tamanho2, 45);
var pizza3 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor3, Tamanho_1.Tamanho.tamanho3, 60);
var pizza4 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor4, Tamanho_1.Tamanho.tamanho3, 60);
pizza1.pizzaDesc();
pizza2.pizzaDesc();
pizza3.pizzaDesc();
pizza4.pizzaDesc();