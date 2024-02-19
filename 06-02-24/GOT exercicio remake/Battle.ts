import { Heir } from "./Classes/Heir";
import { NobleHouse } from "./Classes/NobleHouse";
import { Arryn } from "./Classes/SubClasses/Arryn";
import { Lannister } from "./Classes/SubClasses/Lannister";
import { Stark } from "./Classes/SubClasses/Stark";
import { Targaryen } from "./Classes/SubClasses/Targaryen";
import { Tully } from "./Classes/SubClasses/Tully";

const NobleHouses: Array<NobleHouse> = []

const Arryn_House = new Arryn("Um falcão branco voando e uma lua crescente em fundo azul escuro","Arryn","Tão Alto Como a Honra")
let setHeir = new Heir("Harrold Hardyng",17)
Arryn_House.addHeir(setHeir)
Arryn_House.houseInfo()

const Stark_House = new Stark("A cabeça de um lobo gigante rugindo em um fundo branco sobre verde","Stark","Inverno Está Chegando")
setHeir = new Heir("Arya",18)
Stark_House.addHeir(setHeir)
Stark_House.houseInfo()

const Targaryen_House = new Targaryen("Um dragão de três-cabeças vermelho sobre um fundo negro","Targaryen","Fogo e Sangue")
setHeir = new Heir("Viserys",22)
Targaryen_House.addHeir(setHeir)
setHeir = new Heir("Daenerys ",17) //Recebi spoiler que a Daenerys morre olhando a Wiki D:
Targaryen_House.addHeir(setHeir)
Targaryen_House.houseInfo()

const Tully_House = new Tully("Uma truta prateada saltando em um fundo vermelho e azul","Tully","Família, Dever, Honra")
setHeir = new Heir("Filho de nome desconhecido de Edmure e Roslin",0)
Tully_House.addHeir(setHeir)
Tully_House.houseInfo()

const Lannister_House = new Lannister("Um leão dourado em um campo carmesim","Lannister","Ouça-me Rugir!")
setHeir = new Heir("Jaime",48)
Lannister_House.addHeir(setHeir)
Lannister_House.houseInfo()

NobleHouses.push(Arryn_House,Stark_House,Targaryen_House,Tully_House,Lannister_House)

function BattleOfTheHouses(): void{
for (let i = 0; i < NobleHouses.length + 2; i++) {
   
    
    if(NobleHouses[0].MilitaryForce > NobleHouses[NobleHouses.length-1].MilitaryForce){
        console.log(`Combate > ${NobleHouses[0].name} VS ${NobleHouses[NobleHouses.length-1].name} \nForca Militar > ${NobleHouses[0].MilitaryForce} || ${NobleHouses[NobleHouses.length-1].MilitaryForce} \nVence> ${NobleHouses[0].name}`);
        NobleHouses.pop()
    }
    else if(NobleHouses[0].MilitaryForce < NobleHouses[NobleHouses.length-1].MilitaryForce) {
        console.log(`Combate > ${NobleHouses[0].name} VS ${NobleHouses[NobleHouses.length-1].name} \nForca Militar > ${NobleHouses[0].MilitaryForce} || ${NobleHouses[NobleHouses.length-1].MilitaryForce} \nVence> ${NobleHouses[NobleHouses.length-1].name}`);
        NobleHouses.shift()
        
    }
       
} 

    NobleHouses.sort()
    console.log(`A Casa vencedora é a ${NobleHouses[0].name} \n Com a Forca Militar > ${NobleHouses[0].MilitaryForce} `)
    
}

BattleOfTheHouses()



   /* for (let i = 0; i < NobleHouses.length; i++) {
        console.log(`A Casa vencedora é a ${NobleHouses[i].name} \n Com a Forca Militar > ${NobleHouses[i].MilitaryForce} `)
        console.log(NobleHouses.indexOf(NobleHouses[i]));
        
        
        
    }*/
    /*
    let WinnerHouse = NobleHouses.pop()
    console.log(WinnerHouse?.name);
    console.log(`A Casa vencedora é a ${WinnerHouse?.name} \n Com a Forca Militar > ${WinnerHouse?.MilitaryForce} `) */