
function Game(canvasID) {

  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.bg = new Background(this);
}


Game.prototype.start = function() {
 
  this.interval = setInterval(function() {
    this.clear();   
    this.draw(); 
    this.move();
  
  }.bind(this), 1000 / this.fps);
}

Game.prototype.move = function(){
  // var bg = new Background(this);
  this.bg.move();
}

Game.prototype.draw = function(){
  // var bg = new Background(this);
  this.ctx.beginPath();

  this.bg.draw();
  this.ctx.closePath();

}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
