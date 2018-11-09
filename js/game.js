function Game(canvasID) {
  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;  
  this.bg = new Background(this);
  this.player1 = new Player(this, './img/MarioSprite.png', 'Mario');
  this.player2 = new Player(this, './img/LuigiSprite.png', 'Luigi');
  this.player3 = new Player(this, './img/WarioSprite.png', 'Wario');
  this.player4 = new Player(this, './img/Luigi2Sprite.png', 'Giorgio');
  this.txtCanvas = new TextCanvas(this);
  this.framesCounter = 0;
  this.counterDown = 600;
  this.counterUp = 0;
  this.sg = '';
  this.msg = '';
  this.isFinished = false;
  this.stopCounter = false;
  this.finalTime = 0;
  this.player1Win = false;
  this.player2Win = false;
  this.player3Win = false;
  this.player4Win = false;
  this.allFinished = false;
}

Game.prototype.start = function () {
  var audioShotgun = new Audio('./audio/Shotgun-Sound.mp3');
  var audioCrowd = new Audio('./audio/Stadium.mp3');
  var audioCounter = new Audio('./audio/counterSound3.mp3');
  this.interval = setInterval(function () {
    this.framesCounter++;
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    this.draw();
    if (this.counterDown / 60 > 0) {
      audioCounter.play();
      this.counterDown--;
      if (this.counterDown / 60 <= 5 && this.counterDown / 60 > 0.5) { // últimos 5 segundos 
        this.txtCanvas.txtCountDown();
      }
      if (this.counterDown / 60 < 0.5) {  // Sustituye 0 por GO!!!
        audioCounter.pause();
        audioShotgun.volume = 1;
        audioShotgun.play();
        audioCrowd.play();
        this.txtCanvas.txtGo();
      }
    } else { // Comienza la carrera
      this.txtCanvas.txtChrono();
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
  this.player2.y = 355;
  this.player3.y = 490;
  this.player4.y = 280;
  this.player4.draw(this.isFinished, './img/Luigi2SpriteMeta.png');
  this.player2.draw(this.isFinished, './img/LuigiSpriteMeta.png');
  this.player1.draw(this.isFinished, './img/MarioSpriteMeta.png');
  this.player3.draw(this.isFinished, './img/WarioSpriteMeta.png');
  this.ctx.closePath();
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.setListeners = function () {
  var audioWin = new Audio('./audio/youWin.mp3');
  if (this.player1Win) {
    this.txtCanvas.txtWin(this.player1.name);
  }
  if (this.player2Win) {
    this.txtCanvas.txtWin(this.player2.name);
  }
  if (this.player3Win) {
    this.txtCanvas.txtWin(this.player3.name);
  }
  if (this.player4Win) {
    this.txtCanvas.txtWin(this.player4.name);
  }

  document.onkeyup = function (event) {
    if (this.allFinished) {
      if (event.keyCode === 27) {
        location.reload();
      }
    }
    if (event.keyCode === this.player1.runKey1) { //Entrada jugador 1
      this.player1.animateImg();      
        if (this.bg.move()) { //si ha llegado al final
          if (this.player1.x > 936 && !this.player2Win && !this.player3Win && !this.player4Win) { //línea de meta - ganador
            this.stopCounter = true;
            this.player1Win = true;
          } else if (this.player1.x > 936 && this.player2.x > 936 && this.player3.x > 936 && this.player4.x > 936) {
            audioWin.play();
            clearInterval(this.interval);
            this.txtCanvas.txtReset();
            this.allFinished = true;
          }
          this.isFinished = true;
          if (this.player1.x > 1100) { // Cuando cruza la línea de meta para que se pare
          } else {
            this.player1.x += 35;
          }
        }else if (this.player1.x > 515 || this.player1.x > this.player2.x && this.player1.x > this.player3.x &&
          this.player1.x > this.player4.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
          this.move();
          this.player2.speedThrust += this.player2.thrust;
          this.player2.x -= this.player2.speedX + this.player2.speedThrust;
          this.player3.speedThrust += this.player3.thrust;
          this.player3.x -= this.player3.speedX + this.player3.speedThrust;
          this.player4.speedThrust += this.player4.thrust;
          this.player4.x -= this.player4.speedX + this.player4.speedThrust;        
      } else { // al empezar o ir el último
        this.player1.x += 35;
      }
    }

    if (event.keyCode === this.player2.runKey2) { //Entrada jugador 2
      this.player2.animateImg();      
        if (this.bg.move()) { // si ha llegado al final
          if (this.player2.x > 936 && !this.player1Win && !this.player3Win && !this.player4Win) { //línea de meta - ganador
            this.stopCounter = true;
            this.player2Win = true;
          } else if (this.player1.x > 936 && this.player2.x > 936 && this.player3.x > 936 && this.player4.x > 936) {
            audioWin.play();
            clearInterval(this.interval);
            this.txtCanvas.txtReset();
            this.allFinished = true;
          }          
          this.isFinished = true;
          if (this.player2.x > 1100) {  // Cuando cruza la línea de meta para que se pare
          } else {
            this.player2.x += 35;
          }
        } else if (this.player2.x > 515 || this.player2.x > this.player1.x && this.player2.x > this.player3.x &&
          this.player2.x > this.player4.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
          this.move();
          this.player1.speedThrust += this.player1.thrust;
          this.player1.x -= this.player1.speedX + this.player1.speedThrust;
          this.player3.speedThrust += this.player3.thrust;
          this.player3.x -= this.player3.speedX + this.player3.speedThrust;
          this.player4.speedThrust += this.player4.thrust;
          this.player4.x -= this.player4.speedX + this.player4.speedThrust;
      } else {  // al empezar o ir el último
        this.player2.x += 35
      }
    }

    if (event.keyCode === this.player3.runKey3) { //Entrada jugador 3
      this.player3.animateImg();      
        if (this.bg.move()) { // si ha llegado al final
          if (this.player3.x > 936 && !this.player1Win && !this.player2Win && !this.player4Win) { //línea de meta - ganador
            this.stopCounter = true;
            this.player3Win = true;
          } else if (this.player1.x > 936 && this.player2.x > 936 && this.player3.x > 936 && this.player4.x > 936) {
            audioWin.play();
            clearInterval(this.interval);
            this.txtCanvas.txtReset();
            this.allFinished = true;
          }
          this.isFinished = true;
          if (this.player3.x > 1100) {  // Cuando cruza la línea de meta para que se pare
          } else {
            this.player3.x += 35;
          }
        }else if (this.player3.x > 515 || this.player3.x > this.player1.x && this.player3.x > this.player2.x &&
          this.player3.x > this.player4.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
          this.move();
          this.player1.speedThrust += this.player1.thrust;
          this.player1.x -= this.player1.speedX + this.player1.speedThrust;
          this.player2.speedThrust += this.player2.thrust;
          this.player2.x -= this.player2.speedX + this.player2.speedThrust;
          this.player4.speedThrust += this.player4.thrust;
          this.player4.x -= this.player4.speedX + this.player4.speedThrust;
      } else {  // al empezar o ir el último
        this.player3.x += 35
      }
    }

    if (event.keyCode === this.player4.runKey4) { //Entrada jugador 4
      this.player4.animateImg();      
        if (this.bg.move()) { // si ha llegado al final
          if (this.player4.x > 936 && !this.player1Win && !this.player2Win && !this.player3Win) { //línea de meta - ganador
            this.stopCounter = true;
            this.player4Win = true;
          } else if (this.player1.x > 936 && this.player2.x > 936 && this.player3.x > 936 && this.player4.x > 936) {
            audioWin.play();
            clearInterval(this.interval);
            this.txtCanvas.txtReset();
            this.allFinished = true;
          }
          this.isFinished = true;
          if (this.player4.x > 1100) {  // Cuando cruza la línea de meta para que se pare
          } else {
            this.player4.x += 35;
          }
        }else if (this.player4.x > 515 || this.player4.x > this.player1.x && this.player4.x > this.player2.x &&
          this.player4.x > this.player3.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
          this.move();
          this.player1.speedThrust += this.player1.thrust;
          this.player1.x -= this.player1.speedX + this.player1.speedThrust;
          this.player2.speedThrust += this.player2.thrust;
          this.player2.x -= this.player2.speedX + this.player2.speedThrust;
          this.player3.speedThrust += this.player3.thrust;
          this.player3.x -= this.player3.speedX + this.player3.speedThrust;
      } else {  // al empezar o ir el último
        this.player4.x += 35
      }
    }
  }.bind(this);
};
