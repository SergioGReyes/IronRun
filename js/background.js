
function Background (game){

  this.game = game;
  this.img = new Image()
  this.img.src = './img/pistaIronRun.jpg';

  this.x = 0;
  this.y = 0;
  this.bgw = 8000;
  this.bgh = 700;

  this.final = false; // Para poder parar el background
}

Background.prototype.draw = function(){

  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgw, this.bgh);  
}

Background.prototype.move = function(){
  
  
    if(this.x < -6750){ //Se para al final
     
      // this.final = true;
      return true;
  
    }else{      
       this.x -= 40;
    }
  
}