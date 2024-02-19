"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heir_1 = require("./Classes/Heir");
var Arryn_1 = require("./Classes/SubClasses/Arryn");
var Lannister_1 = require("./Classes/SubClasses/Lannister");
var Stark_1 = require("./Classes/SubClasses/Stark");
var Targaryen_1 = require("./Classes/SubClasses/Targaryen");
var Tully_1 = require("./Classes/SubClasses/Tully");
var NobleHouses = [];
var Arryn_House = new Arryn_1.Arryn("Um falcão branco voando e uma lua crescente em fundo azul escuro", "Arryn", "Tão Alto Como a Honra");
var setHeir = new Heir_1.Heir("Harrold Hardyng", 17);
Arryn_House.addHeir(setHeir);
Arryn_House.houseInfo();
var Stark_House = new Stark_1.Stark("A cabeça de um lobo gigante rugindo em um fundo branco sobre verde", "Stark", "Inverno Está Chegando");
setHeir = new Heir_1.Heir("Arya", 18);
Stark_House.addHeir(setHeir);
Stark_House.houseInfo();
var Targaryen_House = new Targaryen_1.Targaryen("Um dragão de três-cabeças vermelho sobre um fundo negro", "Targaryen", "Fogo e Sangue");
setHeir = new Heir_1.Heir("Viserys", 22);
Targaryen_House.addHeir(setHeir);
setHeir = new Heir_1.Heir("Daenerys ", 17); //Recebi spoiler que a Daenerys morre olhando a Wiki D:
Targaryen_House.addHeir(setHeir);
Targaryen_House.houseInfo();
var Tully_House = new Tully_1.Tully("Uma truta prateada saltando em um fundo vermelho e azul", "Tully", "Família, Dever, Honra");
setHeir = new Heir_1.Heir("Filho de nome desconhecido de Edmure e Roslin", 0);
Tully_House.addHeir(setHeir);
Tully_House.houseInfo();
var Lannister_House = new Lannister_1.Lannister("Um leão dourado em um campo carmesim", "Lannister", "Ouça-me Rugir!");
setHeir = new Heir_1.Heir("Jaime", 48);
Lannister_House.addHeir(setHeir);
Lannister_House.houseInfo();
NobleHouses.push(Arryn_House, Stark_House, Targaryen_House, Tully_House, Lannister_House);
function BattleOfTheHouses() {
    for (var i = 0; i < NobleHouses.length + 2; i++) {
        if (NobleHouses[0].MilitaryForce > NobleHouses[NobleHouses.length - 1].MilitaryForce) {
            console.log("Combate > ".concat(NobleHouses[0].name, " VS ").concat(NobleHouses[NobleHouses.length - 1].name, " \nForca Militar > ").concat(NobleHouses[0].MilitaryForce, " || ").concat(NobleHouses[NobleHouses.length - 1].MilitaryForce, " \nVence> ").concat(NobleHouses[0].name));
            NobleHouses.pop();
        }
        else if (NobleHouses[0].MilitaryForce < NobleHouses[NobleHouses.length - 1].MilitaryForce) {
            console.log("Combate > ".concat(NobleHouses[0].name, " VS ").concat(NobleHouses[NobleHouses.length - 1].name, " \nForca Militar > ").concat(NobleHouses[0].MilitaryForce, " || ").concat(NobleHouses[NobleHouses.length - 1].MilitaryForce, " \nVence> ").concat(NobleHouses[NobleHouses.length - 1].name));
            NobleHouses.shift();
        }
    }
    for (var i = 0; i < NobleHouses.length; i++) {
        console.log("A Casa vencedora \u00E9 a ".concat(NobleHouses[i].name, " \n Com a Forca Militar > ").concat(NobleHouses[i].MilitaryForce, " "));
    }
}
BattleOfTheHouses();
