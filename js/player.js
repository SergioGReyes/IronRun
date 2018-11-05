
function Player (game){

  this.game = game;
  this.img = new Image()
  this.img.src = './img/marioPrueba.png';

  this.x = 170;
  this.y = 400;
  this.bgw = 60;
  this.bgh = 120;

  this.runKey = 188;

}

Player.prototype.draw = function(){

  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgw, this.bgh);  
}