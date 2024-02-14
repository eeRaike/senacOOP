"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BARATHEON_1 = require("./Casas/BARATHEON");
var Heir_1 = require("./Heir");
var baratheon = new BARATHEON_1.Baratheon("Teste1", "test");
var herdeiro = new Heir_1.Heir("nometest", 18, 1);
baratheon.addHeir(herdeiro);
