import { Entity } from "./Entity"
import { ZumbiS } from "./ZumbiDSan";
import { ZumbiSB } from "./ZumbiDSanB";

export class Battle {
    round: number;
    turnIndex: number;
    turns: Entity[] = [];
    enemyAmount: number;


    constructor(){
        this.round = 0;
        this.turnIndex = 0;
        this.enemyAmount = 0;
    }

    setupBattle(){
        if(this.enemyAmount < 4){
            let temp_name = this.createEnemy()
        this.turns.push(temp_name)
        }
        
    }
    createEnemy():Entity{
            let monsterType = Math.floor(Math.random() * 1)
            let c_enemy:Entity
        if(monsterType === 0){
            c_enemy = new ZumbiS('Zumbi de Sangue' + this.enemyAmount)
            this.enemyAmount++
            
         }else if(monsterType === 1){
            c_enemy = new ZumbiSB('Zumbi de Sangue Bestial' + this.enemyAmount)
            this.enemyAmount++
            
            }
        return c_enemy;
    
    }
    nextTurn():void{
        if(this.turnIndex >= this.turns.length){
            this.turnIndex = 0
        } else {
            this.turnIndex++
        }
    }
    nextRound():void{
        this.round++
    }
}