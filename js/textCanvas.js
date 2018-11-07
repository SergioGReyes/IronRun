function TextCanvas(game) {
  this.game = game;
}

TextCanvas.prototype.txtCountDown = function () {

  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 3;
  this.game.ctx.fillText(`${Math.round(this.game.counterDown / 60)}`, canvas.width / 2, canvas.height / 2);
  this.game.ctx.strokeText(`${Math.round(this.game.counterDown / 60)}`, canvas.width / 2, canvas.height / 2);
}
TextCanvas.prototype.txtGo = function () {

  this.game.ctx.font = "150px Impact";
  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.lineWidth = 3;
  this.game.ctx.fillText(`GO!!!`, canvas.width / 2, canvas.height / 2);
  this.game.ctx.strokeText(`GO!!!`, canvas.width / 2, canvas.height / 2);
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
  document.getElementById('chrono').style.display = "flex";
  document.getElementById('chrono').innerHTML = `<p>${this.game.sg}</p> <p>:</p> <p>${this.game.msg}</p>`
  !this.game.stopCounter ? this.game.counterUp++ : this.game.counterUp;
}

TextCanvas.prototype.txtWin = function (name) {

  this.game.ctx.font = "150px Impact";
  this.game.ctx.fillStyle = "white";
  this.game.ctx.textAlign = "center";
  this.game.ctx.fillText(`${name} Wins!!!`, canvas.width / 2, canvas.height / 2);
  this.game.ctx.strokeText(`${name} Wins!!!`, canvas.width / 2, canvas.height / 2);
}