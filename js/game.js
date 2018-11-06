
function Game(canvasID) {

  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.bg = new Background(this);
  this.player1 = new Player(this, './img/MarioSprite.png');
  this.player2 = new Player(this, './img/LuigiSprite.png');
  this.framesCounter=0;
}

Game.prototype.start = function () {

  this.interval = setInterval(function () {
    // this.clear();  

    this.framesCounter++;
    
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    } 
    
    this.draw();
    // this.move();    
    this.setListeners();

  }.bind(this), 1000 / this.fps);
}

Game.prototype.move = function () {
  // var bg = new Background(this);
  this.bg.move();
}

Game.prototype.draw = function () {
  // var bg = new Background(this);
  this.ctx.beginPath();
  this.bg.draw();

  this.player2.y = 325;
  this.player2.draw();
  this.player1.draw();
  this.ctx.closePath();
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.audio = function(){

  var audioCrowd = new Audio('./audio/Stadium.mp3');
  audioCrowd.play();
}


Game.prototype.setListeners = function () {
  var thrust = 0.25;
  document.onkeydown = function (event) {

    if (event.keyCode === this.player1.runKey1) { //Entrada jugador 1
      this.player1.animateImg();
      console.log(this.player1.x);
      if (this.player1.x > 515 || this.player1.x > this.player2.x) {  // Cuando llega a la mitad de la pantalla
        this.move();
        this.player2.x -= 70;
        
        if (this.bg.move()) { //si ha llegado al final
          this.player2.x += 70
          
          if (this.player1.x > 905) { // Cuando cruza la línea de meta

          } else {
            this.player1.x += 70;
            
          }
        }
      } else {
        this.player1.x += 70;
          
      }
    }

    if (event.keyCode === this.player2.runKey2) { //Entrada jugador 2
      this.player2.animateImg();
      console.log(this.player2.x);
      console.log(this.bg.x);
      if (this.player2.x > 515 || this.player2.x > this.player1.x) {
        this.move();
        this.player1.x -= 70;
        
        if (this.bg.move()) { // si ha llegado al final
          this.player1.x += 70;
         
          if (this.player2.x > 905) {

          } else {
            this.player2.x += 70;
           
          }
        }
      } else {
        this.player2.x += 70
        
      }
    }

  }.bind(this);
};
