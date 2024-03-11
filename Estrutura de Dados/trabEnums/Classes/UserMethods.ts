import { UserClass } from "./UserClass";

export class UserMethods{

    usersArray: Array<UserClass> = []
    lastUsersId: number = 0;

    userRegister(){
        const rl = require('readline-sync')
        
    
        let usersName: String = rl.question("\nInsira o nome do Usuario> ");
        let usersComms: Number = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++
        let usersReg = new UserClass(this.lastUsersId,usersName,usersComms)
        this.usersArray.push(usersReg)
        console.log(this.usersArray);
        
        
    
       }
    
    


}