
function Background(game, vp1, vp2) {

  this.game = game;
  this.img = new Image()
  this.img.src = './img/pistaIronRun.jpg';

  // this.vp1 = vp1;
  // this.vp2 = vp2;
  this.x = 0;
  this.y = 0;
  this.bgW = 8000;
  this.bgH = 700;

  this.sum = 0;

  // this.final = false; 
}

Background.prototype.draw = function () {

  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgW, this.bgH);
}

Background.prototype.move = function () {

  if (this.x < -6750) { //Se para al final

    // this.final = true;
    return true;

  } else {
    this.x -= 35;
  }

}