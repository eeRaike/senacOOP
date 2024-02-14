"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeirY_1 = require("./Classes/HeirY");
var NobleHouseY_1 = require("./Classes/NobleHouseY");
var testHeir = new HeirY_1.Heir("test", 18);
var testHouse = new NobleHouseY_1.NobleHouse("testName", "testMotto");
console.log("House> ".concat(testHouse.name, " \nHeir> ").concat(testHeir.heirName));
testHouse.addHeir(testHeir);
console.log(testHouse.heirList[0].heirName, testHouse.heirList[0].heirAge, testHouse.heirList[0].heirPosition);
