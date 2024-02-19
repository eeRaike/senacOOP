"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heir_1 = require("./Classes/Heir");
var Arryn_1 = require("./Classes/SubClasses/Arryn");
var Lannister_1 = require("./Classes/SubClasses/Lannister");
var Stark_1 = require("./Classes/SubClasses/Stark");
var Targaryen_1 = require("./Classes/SubClasses/Targaryen");
var Tully_1 = require("./Classes/SubClasses/Tully");
var CasasNobres = [];
var Casa_Arryn = new Arryn_1.Arryn("Um falcão branco voando e uma lua crescente em fundo azul escuro", "Arryn", "Tão Alto Como a Honra");
var Herdeiro = new Heir_1.Heir("Harrold Hardyng", 17);
Casa_Arryn.addHeir(Herdeiro);
Casa_Arryn.houseInfo();
var Casa_Stark = new Stark_1.Stark("A cabeça de um lobo gigante rugindo em um fundo branco sobre verde", "Stark", "Inverno Está Chegando");
Herdeiro = new Heir_1.Heir("Arya", 18);
Casa_Stark.addHeir(Herdeiro);
Casa_Stark.houseInfo();
var Casa_Targaryen = new Targaryen_1.Targaryen("Um dragão de três-cabeças vermelho sobre um fundo negro", "Targaryen", "Fogo e Sangue");
Herdeiro = new Heir_1.Heir("Viserys", 22);
Casa_Targaryen.addHeir(Herdeiro);
Herdeiro = new Heir_1.Heir("Daenerys ", 17); //Recebi spoiler que a Daenerys morre olhando a Wiki D:
Casa_Targaryen.addHeir(Herdeiro);
Casa_Targaryen.houseInfo();
var Casa_Tully = new Tully_1.Tully("Uma truta prateada saltando em um fundo vermelho e azul", "Tully", "Família, Dever, Honra");
Herdeiro = new Heir_1.Heir("Filho de nome desconhecido de Edmure e Roslin", 0);
Casa_Tully.addHeir(Herdeiro);
Casa_Tully.houseInfo();
var Casa_Lannister = new Lannister_1.Lannister("Um leão dourado em um campo carmesim", "Lannister", "Ouça-me Rugir!");
Herdeiro = new Heir_1.Heir("Jaime", 48);
Casa_Lannister.addHeir(Herdeiro);
Casa_Lannister.houseInfo();
CasasNobres.push(Casa_Arryn, Casa_Stark, Casa_Targaryen, Casa_Tully, Casa_Lannister);
function BattleOfTheHouses() {
    for (var i = 0; i < CasasNobres.length + 2; i++) {
        if (CasasNobres[0].forcaMilitar > CasasNobres[CasasNobres.length - 1].forcaMilitar) {
            console.log("Combate > ".concat(CasasNobres[0].name, " VS ").concat(CasasNobres[CasasNobres.length - 1].name, " \nForca Militar > ").concat(CasasNobres[0].forcaMilitar, " || ").concat(CasasNobres[CasasNobres.length - 1].forcaMilitar, " \nVence> ").concat(CasasNobres[0].name));
            CasasNobres.pop();
        }
        else if (CasasNobres[0].forcaMilitar < CasasNobres[CasasNobres.length - 1].forcaMilitar) {
            console.log("Combate > ".concat(CasasNobres[0].name, " VS ").concat(CasasNobres[CasasNobres.length - 1].name, " \nForca Militar > ").concat(CasasNobres[0].forcaMilitar, " || ").concat(CasasNobres[CasasNobres.length - 1].forcaMilitar, " \nVence> ").concat(CasasNobres[CasasNobres.length - 1].name));
            CasasNobres.shift();
        }
    }
    for (var i = 0; i < CasasNobres.length; i++) {
        console.log("A Casa vencedora \u00E9 a ".concat(CasasNobres[i].name, " \n Com a Forca Militar > ").concat(CasasNobres[i].forcaMilitar, " "));
    }
}
BattleOfTheHouses();
