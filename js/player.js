
function Player (game, img){

  this.game = game;
  this.img = new Image()
  this.img.src = img;

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.x = 170;
  this.y = 400;
  this.bgw = 60;
  this.bgh = 120;

  this.vX = 0.5;
  
  this.runKey1 = 188;
  this.runKey2 = 190;
}

Player.prototype.draw = function(){
  
  // this.game.ctx.drawImage(this.img, this.x, this.y, this.bgw, this.bgh); 
  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgw, this.bgh);  

}

