
function Game(canvasID) {

  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

}


Game.prototype.start = function() {

 
  this.interval = setInterval(function() {
    //this.clear();   
    this.draw(); 
    this.move();
  
  }.bind(this), 1000 / this.fps);
}

Game.prototype.move = function(){
  this.bg = new Background(this);
  this.bg.move();
}

Game.prototype.draw = function(){
  this.bg = new Background(this);
  this.ctx.beginPath();

  this.bg.draw();
  this.ctx.closePath();

}
