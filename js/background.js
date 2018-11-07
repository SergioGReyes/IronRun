
function Background(game, myImg) {

  this.game = game;
  this.img = new Image()
  this.img.src = './img/pistaIronRun.jpg';

  this.x = 0;
  this.y = 0;

  this.speedX = 0;
  this.speedY = 0;

  this.speedThrust = 1;
  this.thrust = 0.5;

  this.bgW = 8000;
  this.bgH = 800;
}

Background.prototype.drawBG = function () {

  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgW, this.bgH);
}

Background.prototype.move = function () {

  if (this.x < -6500) { //Se para al final

    return true;

  } else {
    this.speedThrust += this.thrust;
    this.x -= this.speedX + this.speedThrust;
    // this.x -= 25;
  }

}