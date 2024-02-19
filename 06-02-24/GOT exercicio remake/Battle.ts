import { Heir } from "./Classes/Heir";
import { NobleHouse } from "./Classes/NobleHouse";
import { Arryn } from "./Classes/SubClasses/Arryn";
import { Lannister } from "./Classes/SubClasses/Lannister";
import { Stark } from "./Classes/SubClasses/Stark";
import { Targaryen } from "./Classes/SubClasses/Targaryen";
import { Tully } from "./Classes/SubClasses/Tully";

const CasasNobres: Array<NobleHouse> = []

const Casa_Arryn = new Arryn("Um falcão branco voando e uma lua crescente em fundo azul escuro","Arryn","Tão Alto Como a Honra")
let Herdeiro = new Heir("Harrold Hardyng",17)
Casa_Arryn.addHeir(Herdeiro)
Casa_Arryn.houseInfo()

const Casa_Stark = new Stark("A cabeça de um lobo gigante rugindo em um fundo branco sobre verde","Stark","Inverno Está Chegando")
Herdeiro = new Heir("Arya",18)
Casa_Stark.addHeir(Herdeiro)
Casa_Stark.houseInfo()

const Casa_Targaryen = new Targaryen("Um dragão de três-cabeças vermelho sobre um fundo negro","Targaryen","Fogo e Sangue")
Herdeiro = new Heir("Viserys",22)
Casa_Targaryen.addHeir(Herdeiro)
Herdeiro = new Heir("Daenerys ",17) //Recebi spoiler que a Daenerys morre olhando a Wiki D:
Casa_Targaryen.addHeir(Herdeiro)
Casa_Targaryen.houseInfo()

const Casa_Tully = new Tully("Uma truta prateada saltando em um fundo vermelho e azul","Tully","Família, Dever, Honra")
Herdeiro = new Heir("Filho de nome desconhecido de Edmure e Roslin",0)
Casa_Tully.addHeir(Herdeiro)
Casa_Tully.houseInfo()

const Casa_Lannister = new Lannister("Um leão dourado em um campo carmesim","Lannister","Ouça-me Rugir!")
Herdeiro = new Heir("Jaime",48)
Casa_Lannister.addHeir(Herdeiro)
Casa_Lannister.houseInfo()

CasasNobres.push(Casa_Arryn,Casa_Stark,Casa_Targaryen,Casa_Tully,Casa_Lannister)

function BattleOfTheHouses(): void{
for (let i = 0; i < CasasNobres.length + 2; i++) {
   
    
    if(CasasNobres[0].forcaMilitar > CasasNobres[CasasNobres.length-1].forcaMilitar){
        console.log(`Combate > ${CasasNobres[0].name} VS ${CasasNobres[CasasNobres.length-1].name} \nForca Militar > ${CasasNobres[0].forcaMilitar} || ${CasasNobres[CasasNobres.length-1].forcaMilitar} \nVence> ${CasasNobres[0].name}`);
        CasasNobres.pop()
    }
    else if(CasasNobres[0].forcaMilitar < CasasNobres[CasasNobres.length-1].forcaMilitar) {
        console.log(`Combate > ${CasasNobres[0].name} VS ${CasasNobres[CasasNobres.length-1].name} \nForca Militar > ${CasasNobres[0].forcaMilitar} || ${CasasNobres[CasasNobres.length-1].forcaMilitar} \nVence> ${CasasNobres[CasasNobres.length-1].name}`);
        CasasNobres.shift()
    }
    else{
        console.log(`A Casa vencedora é a ${CasasNobres[0].name} \nForca Militar > ${CasasNobres[0].forcaMilitar} `);
        
    }
    
    
} }

BattleOfTheHouses()