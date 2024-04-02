export class historico {
    history: string[];
    
    constructor(){
        this.history = [];
    }
    showHistory(){
        if(this.isEmpty() === true){
            console.log("Historico vazio");
            
        }else{
            for (let i = 0; i < this.history.length; i++) {
                console.log(this.history[i]);
                
            }
        }
        
    }
    acessSite(item:string){
        this.history.push(item)
    }
    deleteLast():void{
        this.history.pop()
    }
    isEmpty(): boolean{
        return this.history.length === 0;
        
    }
    size(): number {
        return this.history.length;
    }
}