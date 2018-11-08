function Player(game, img, name) {

  this.game = game;
  this.img = new Image()
  this.img.src = img;
  this.name = name;

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.x = 170;
  this.y = 425;
  this.bgw = 60;
  this.bgh = 120;

  this.speedX = 0;
  this.speedY = 0;

  this.speedThrust = 1;
  this.thrust = 0.5;

  this.runKey1 = 188;
  this.runKey2 = 190;
}

Player.prototype.draw = function (isFinished, img) {

  isFinished ? this.img.src = img : this.img;

  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.bgw,
    this.bgh
  );
}

Player.prototype.animateImg = function () {

  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  if (this.game.framesCounter % 1 === 0) {
    this.img.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
}

