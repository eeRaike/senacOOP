"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arryn_1 = require("./Classes/SubClasses/Arryn");
var Stark_1 = require("./Classes/SubClasses/Stark");
var Targaryen_1 = require("./Classes/SubClasses/Targaryen");
var array1 = [];
var array2 = [];
var Casa_Arryn = new Arryn_1.Arryn("a", "Arryn", "a");
var Casa_Stark = new Stark_1.Stark("b", "Stark", "b");
var Casa_Targaryen = new Targaryen_1.Targaryen("c", "Targaryen", "c");
array1.push(Casa_Arryn, Casa_Stark, Casa_Targaryen);
function testfunction() {
    for (var i = 0; i < array1.length + 2; i++) {
        if (array1[0].forcaMilitar > array1[array1.length - 1].forcaMilitar) {
            console.log("Combate > ".concat(array1[0].name, " VS ").concat(array1[array1.length - 1].name, " \nForca Militar > ").concat(array1[0].forcaMilitar, " || ").concat(array1[array1.length - 1].forcaMilitar, " \nVence> ").concat(array1[0].name));
            array1.pop();
        }
        else if (array1[0].forcaMilitar < array1[array1.length - 1].forcaMilitar) {
            console.log("Combate > ".concat(array1[0].name, " VS ").concat(array1[array1.length - 1].name, " \nForca Militar > ").concat(array1[0].forcaMilitar, " || ").concat(array1[array1.length - 1].forcaMilitar, " \nVence> ").concat(array1[array1.length - 1].name));
            array1.shift();
        }
        else {
            console.log("A Casa vencedora \u00E9 a ".concat(array1[0].name, " \nForca Militar > ").concat(array1[0].forcaMilitar, " "));
        }
    }
}
testfunction();
