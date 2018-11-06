
window.onload = function () {

  canvas = document.getElementById('canvasID');
  ctx = canvas.getContext("2d");
  var img = new Image();
  var imgEnter = new Image();
  img.src = './img/sports-stadium.jpg'
  imgEnter.src = './img/enterkey.png'
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgEnter, 900, 450, 200, 180);
  };

  document.onkeyup = function (event) {

    if (event.keyCode === 13) {
      var game = new Game('canvasID');
      var audioCrowd = new Audio('./audio/Stadium.mp3');
      audioCrowd.play();
      game.start();
    }

  }.bind(this);
};