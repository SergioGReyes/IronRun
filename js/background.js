
function Background (game){

  this.game = game;
  this.img = new Image()
  this.img.src = './img/pistaIronRun.jpg';

  this.x = 0;
  this.y = 0;
}

Background.prototype.draw = function(){

  this.game.ctx.drawImage(this.img, this.x, this.y, 8000, 700);  
}

Background.prototype.move = function(){
  this.x -= 4;
  
  
}