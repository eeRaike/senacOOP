class Player{
    x:number;
    width:number;
    height:number;

    constructor(private canvas:HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null){
        this.x = canvas. width / 2;
        this.width = 50;
        this.height = 20;
    }

    draw():void{
        if(this.ctx === null ) return;
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x - this.width / 2, this.canvas.height - this.height,this.width, this.height)
    }
}

class Obstacle{
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(private canvas:HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null){
        this.x = Math.random() * (canvas.width - 50);    
        this.y = 0;
        this.width = 50;
        this.height = 20;
    }

    draw():void{
        if(this.ctx === null) return;
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x,this.y,this.width, this.height)
    }

    update(speed: number ): void {
        this.y += speed;
        if(this.y > this.canvas.height){
            this.y = 0;
            this.x = Math.random() * (this.canvas.width - this.width);
        }
    }

}

class Game{

    private player: Player;
    private obstacles: Obstacle[]
    private speed: number;
    private gameOver: Boolean;

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null) {
        this.player = new Player(canvas,ctx);
        this.obstacles = [];
        this.speed = 4
        this.gameOver = false;
        canvas.addEventListener('mousemove', this.movePlayer.bind(this));
    }

    movePlayer(event: MouseEvent):void{
        this.player.x = event.clientX - this.canvas.offsetLeft
    }

    updateObstacles():void {
        if(!this.gameOver) {
            
        }
    }
}