
function Game(canvasID) {

  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.bg = new Background(this, './img/pistaIronRun.jpg');
  this.player1 = new Player(this, './img/MarioSprite.png');
  this.player2 = new Player(this, './img/LuigiSprite.png');

  this.framesCounter = 0;
  this.counterDown = 600;
  this.counterUp = 0;
  this.sg = '';
  this.msg = '';
  this.isFinished = false;
}

Game.prototype.start = function () {
  var audioShotgun = new Audio('./audio/Shotgun-Sound.mp3');
  this.interval = setInterval(function () {

    this.framesCounter++;
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    this.draw();
    // console.log(this.counter);
    if (this.counterDown / 60 > 0) {
      this.counterDown--;
      // console.log(this.counterDown / 60);
      if (this.counterDown / 60 <= 5 && this.counterDown / 60 > 0.5) { // últimos 5 segundos

        ctx.font = "150px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`${Math.round(this.counterDown / 60)}`, canvas.width / 2, canvas.height / 2);
      }
      if (this.counterDown / 60 < 0.5) {  // Sustituye 0 por GO!!!
        audioShotgun.volume = 1;
        audioShotgun.play();
        ctx.font = "150px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`GO!!!`, canvas.width / 2, canvas.height / 2);
      }

    } else { // Comienza la carrera
      ctx.font = "80px Comic Sans MS";
      ctx.fillStyle = "white";

      this.sg = Math.floor(this.counterUp / 60);
      this.msg = ((this.counterUp / 60) - Math.floor(this.counterUp / 60)).toString().substring(2, 4);

      // console.log(this.sg);
      // console.log(this.msg);
      if (this.sg.length === 1) {
        this.sg = '0' + this.sg;
      }
      if (this.msg.length === 1) {
        this.msg = '0' + this.msg;
      }
      document.getElementById('chrono').style.display = "block";
      document.getElementById('chrono').innerHTML = `${this.sg}:${this.msg}`
      // ctx.fillText(`${this.sg}:${this.msg}`, 1030, 100);
      this.counterUp++;
      this.setListeners();
    }

  }.bind(this), 1000 / this.fps);
}

Game.prototype.move = function () {
  this.bg.move();
}

Game.prototype.draw = function () {
  this.ctx.beginPath();
  this.bg.drawBG();
  this.player2.y = 325;
  this.player2.draw(this.isFinished, './img/LuigiSpriteMeta.png');
  this.player1.draw(this.isFinished, './img/MarioSpriteMeta.png');
  this.ctx.closePath();
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.setListeners = function () {
  console.log(this.player1.x);
  document.onkeyup = function (event) {

    if (event.keyCode === this.player1.runKey1) { //Entrada jugador 1
      this.player1.animateImg();
      // console.log(this.player1.x);
      if (this.player1.x > 515 || this.player1.x > this.player2.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
        this.move();
        // this.player2.x -= 35;
        this.player2.speedThrust += this.player2.thrust;
        this.player2.x -= this.player2.speedX + this.player2.speedThrust;

        if (this.bg.move()) { //si ha llegado al final

          if(this.player1.x > 721){ //línea de meta - ganador
          
          }
          this.player2.x += 35

          this.isFinished = true;
          if (this.player1.x > 905) { // Cuando cruza la línea de meta para que se pare

          } else {
            this.player1.x += 35;
          }
        }
      } else { // al empezar o ir el último
        this.player1.x += 35;
      }
    }

    if (event.keyCode === this.player2.runKey2) { //Entrada jugador 2
      this.player2.animateImg();
      // console.log(this.player2.x);
      // console.log(this.bg.x);
      if (this.player2.x > 515 || this.player2.x > this.player1.x) {
        this.move();
        // this.player1.x -= 35;
        this.player1.speedThrust += this.player1.thrust;
        this.player1.x -= this.player1.speedX + this.player1.speedThrust;

        if (this.bg.move()) { // si ha llegado al final
          this.player1.x += 35;

          if (this.player2.x > 905) {

          } else {
            this.player2.x += 35;
          }
        }
      } else {
        this.player2.x += 35
      }
    }
  }.bind(this);
};
