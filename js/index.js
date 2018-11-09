
window.onload = function () {
  var game = new Game('canvasID');
  canvas = document.getElementById('canvasID');
  ctx = canvas.getContext("2d");
  document.getElementById('mainTheme').play();
  var img = new Image();
  img.src = './img/MainTitle2.jpg'
  img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  document.onkeydown = function (event) {

    if (event.keyCode === 75) {     
      game.txtCanvas.txtControls();
    }
  }.bind(this);

  document.onkeyup = function (event) {
    if (event.keyCode === 13) {
      var game = new Game('canvasID');
      var audioStart = new Audio('./audio/PressStart2.mp3');
      audioStart.play();
      game.start();
    }

    if (event.keyCode === 75) {     
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    }

  }.bind(this);



};