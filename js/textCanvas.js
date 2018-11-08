function TextCanvas(game) {
  this.game = game;
}

TextCanvas.prototype.txtCountDown = function () {
  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 4;
  this.game.ctx.shadowOffsetX = 2;
  this.game.ctx.shadowOffsetY = 2;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`${Math.round(this.game.counterDown / 60)}`, canvas.width / 2, (canvas.height / 2) + 30);
  this.game.ctx.strokeText(`${Math.round(this.game.counterDown / 60)}`, canvas.width / 2, (canvas.height / 2) +30);
}
TextCanvas.prototype.txtGo = function () {
  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 4;
  this.game.ctx.shadowOffsetX = 2;
  this.game.ctx.shadowOffsetY = 2;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`GO!!!`, canvas.width / 2, (canvas.height / 2) + 30);
  this.game.ctx.strokeText(`GO!!!`, canvas.width / 2, (canvas.height / 2) + 30);
}
TextCanvas.prototype.txtChrono = function () {
  this.game.sg = Math.floor(this.game.counterUp / 60);
  this.game.msg = ((this.game.counterUp / 60) - Math.floor(this.game.counterUp / 60)).toString().substring(2, 4);
  if (this.game.sg.length === 1) {
    this.game.sg = '0' + this.game.sg;
  }
  if (this.game.msg.length === 1) {
    this.game.msg = '0' + this.game.msg;
  }
  !this.game.stopCounter ? this.game.counterUp++ : this.game.counterUp;
  
  this.game.ctx.font = "80px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "right";
  this.game.ctx.lineWidth = 2.5;
  this.game.ctx.shadowOffsetX = 1;
  this.game.ctx.shadowOffsetY = 1;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`${this.game.sg}`, (canvas.width / 1.25)-25, (canvas.height * 0.15) + 10);
  this.game.ctx.fillText(`:`, (canvas.width / 1.25), (canvas.height * 0.15) + 10);
  this.game.ctx.fillText(`${this.game.msg}`, (canvas.width / 1.25) + 90, (canvas.height * 0.15) + 10);
  this.game.ctx.strokeText(`${this.game.sg}`, (canvas.width / 1.25)-25, (canvas.height * 0.15) + 10);
  this.game.ctx.strokeText(`:`, (canvas.width / 1.25), (canvas.height * 0.15) + 10);
  this.game.ctx.strokeText(`${this.game.msg}`, (canvas.width / 1.25) + 90, (canvas.height * 0.15) + 10);
}

TextCanvas.prototype.txtWin = function (name) {
  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 4;
  this.game.ctx.shadowOffsetX = 2;
  this.game.ctx.shadowOffsetY = 2;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`${name} Wins!!!`, canvas.width / 2, (canvas.height / 2) + 30);
  this.game.ctx.strokeText(`${name} Wins!!!`, canvas.width / 2, (canvas.height / 2) + 30);
}

TextCanvas.prototype.txtReset = function (){
  this.game.ctx.font = "80px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 3;
  this.game.ctx.shadowOffsetX = 1;
  this.game.ctx.shadowOffsetY = 1;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`Esc: Menu`, canvas.width / 2, (canvas.height / 2) + 200);
  this.game.ctx.strokeText(`Esc: Menu`, canvas.width / 2, (canvas.height / 2) + 200);
}
TextCanvas.prototype.txtControls = function (){
  this.game.ctx.font = "80px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 3;
  this.game.ctx.shadowOffsetX = 1;
  this.game.ctx.shadowOffsetY = 1;
  this.game.ctx.shadowColor = "rgba(0,0,0,0.3)";
  this.game.ctx.shadowBlur = 1;
  this.game.ctx.fillText(`Esc: Menu`, canvas.width / 2, (canvas.height / 2) + 200);
  this.game.ctx.strokeText(`Esc: Menu`, canvas.width / 2, (canvas.height / 2) + 200);
}

