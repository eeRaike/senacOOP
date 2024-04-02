// Classe Player para representar o jogador
var Player = /** @class */ (function () {
    function Player(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        // Inicializa a posição, largura e altura do jogador
        this.x = canvas.width / 2; // Posiciona o jogador no centro horizontal do canvas
        this.y = canvas.height - 20; // Posiciona o jogador no fundo do canvas
        this.width = 20; // Define a largura do jogador
        this.height = 20; // Define a altura do jogador
    }
    // Método para desenhar o jogador na tela
    Player.prototype.draw = function () {
        if (this.ctx === null)
            return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'blue'; // Define a cor de preenchimento do jogador como azul
        // Desenha um retângulo representando o jogador nas coordenadas especificadas
        this.ctx.fillRect(this.x - this.width / 2, this.y, this.width, this.height);
    };
    return Player;
}());
// Classe Obstacle para representar os obstáculos
var Obstacle = /** @class */ (function () {
    function Obstacle(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        // Inicializa a posição, largura e altura do obstáculo
        this.x = Math.random() * (canvas.width - 50); // Gera uma posição horizontal aleatória para o obstáculo
        this.y = 0; // Inicializa o obstáculo no topo do canvas
        this.width = 20; // Define a largura do obstáculo
        this.height = 20; // Define a altura do obstáculo
    }
    // Método para desenhar o obstáculo na tela
    Obstacle.prototype.draw = function () {
        if (this.ctx === null)
            return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'red'; // Define a cor de preenchimento do obstáculo como vermelho
        // Desenha um retângulo representando o obstáculo nas coordenadas especificadas
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    // Método para atualizar a posição do obstáculo com base na velocidade
    Obstacle.prototype.update = function (speed) {
        this.y += speed; // Move o obstáculo para baixo com base na velocidade
        // Verifica se o obstáculo saiu da tela e o reposiciona no topo com uma nova posição horizontal aleatória
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * (this.canvas.width - this.width);
        }
    };
    return Obstacle;
}());
// Classe Game para controlar o jogo
var Game = /** @class */ (function () {
    function Game(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(canvas, ctx); // Inicializa o jogador
        this.obstacles = []; // Inicializa o array de obstáculos vazio
        this.speed = 9; // Define a velocidade inicial dos obstáculos
        this.obstacleInterval = 2000; // Define o intervalo inicial entre a criação de novos obstáculos (em milissegundos)
        this.lastObstacleTime = 0; // Inicializa o último momento em que um obstáculo foi criado
        this.score = 0; // Inicializa a pontuação do jogador
        this.gameOver = false; // Define o estado inicial do jogo como não finalizado
        canvas.addEventListener('mousemove', this.movePlayer.bind(this)); // Adiciona um ouvinte de evento para mover o jogador com o mouse
        // Chamamos o método para criar os obstáculos
        this.createObstacles();
    }
    // Método para criar os obstáculos
    Game.prototype.createObstacles = function () {
        var currentTime = Date.now();
        if (currentTime - this.lastObstacleTime > this.obstacleInterval) {
            // Adiciona um novo obstáculo
            this.obstacles.push(new Obstacle(this.canvas, this.ctx));
            // Atualiza o último momento em que um obstáculo foi criado
            this.lastObstacleTime = currentTime;
            // Reduz o intervalo entre a criação de novos obstáculos para aumentar a frequência com o tempo
            this.obstacleInterval *= 0.95; // Por exemplo, reduzimos o intervalo em 5% a cada novo obstáculo criado
        }
    };
    // Método para mover o jogador com base no movimento do mouse
    Game.prototype.movePlayer = function (event) {
        this.player.x = event.clientX - this.canvas.offsetLeft; // Define a posição horizontal do jogador com base na posição do mouse
    };
    // Método para iniciar o jogo
    Game.prototype.start = function () {
        // Chama repetidamente a função update() para atualizar o estado do jogo
        setInterval(this.update.bind(this), 1000 / 60); // 60 FPS
    };
    // Método para atualizar o estado do jogo
    Game.prototype.update = function () {
        if (this.gameOver)
            return; // Se o jogo acabou, não atualiza mais
        // Variável para controlar se um obstáculo passou sem colidir
        var obstaclePassed = false;
        // Atualiza a posição dos obstáculos
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            obstacle.update(this.speed);
            // Verifica se houve uma colisão entre o jogador e um obstáculo
            if (this.checkCollision(obstacle)) {
                this.gameOver = true; // Marca o jogo como finalizado
                alert('Game Over! Pontuação: ' + this.score); // Exibe mensagem de Game Over com a pontuação no alerta
                return; // Sai da função de atualização, pois o jogo acabou
            }
            // Verifica se o obstáculo ultrapassou o jogador sem colidir
            if (obstacle.y > this.canvas.height - 20 && !this.checkCollision(obstacle)) {
                obstaclePassed = true;
            }
        }
        // Incrementa a pontuação se um obstáculo passou sem colidir
        if (obstaclePassed) {
            this.score++;
        }
        // Limpa o canvas
        this.clearCanvas();
        // Desenha o jogador
        this.player.draw();
        // Desenha os obstáculos
        for (var _b = 0, _c = this.obstacles; _b < _c.length; _b++) {
            var obstacle = _c[_b];
            obstacle.draw();
        }
        // Desenha a pontuação na tela
        this.drawScore();
        // Chamamos o método para criar os obstáculos
        this.createObstacles();
    };
    // Método para desenhar a pontuação na tela
    Game.prototype.drawScore = function () {
        if (this.ctx === null)
            return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'black'; // Define a cor de preenchimento como preto
        this.ctx.font = '20px Arial'; // Define a fonte do texto
        this.ctx.fillText('Pontuação: ' + this.score, 10, 30); // Desenha o texto da pontuação na posição especificada
    };
    // Método para verificar colisões entre o jogador e os obstáculos
    Game.prototype.checkCollision = function (obstacle) {
        // Verifica se houve uma colisão entre os retângulos delimitados pelo jogador e pelo obstáculo
        return this.player.x < obstacle.x + obstacle.width - 5 &&
            this.player.x + this.player.width - 5 > obstacle.x &&
            this.player.y < obstacle.y + obstacle.height &&
            this.player.y + this.player.height > obstacle.y;
    };
    // Método para limpar o canvas
    Game.prototype.clearCanvas = function () {
        if (this.ctx === null)
            return; // Verifica se o contexto de renderização está disponível
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa o canvas
    };
    return Game;
}());
// Adiciona um ouvinte de evento para iniciar o jogo quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('gameCanvas'); // Obtém a referência ao elemento <canvas>
    var ctx = canvas.getContext('2d'); // Obtém o contexto de renderização 2D do canvas
    if (ctx === null) {
        throw new Error('canvas'); // Lança um erro se o contexto de renderização não estiver disponível
    }
    var game = new Game(canvas, ctx); // Cria uma instância da classe Game com o elemento <canvas> e o contexto de renderização como argumentos
    game.start(); // Inicia o jogo
});
