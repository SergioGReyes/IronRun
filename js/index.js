
window.onload = function () {

  canvas = document.getElementById('canvasID');
  ctx = canvas.getContext("2d");  
  
  var img = new Image();
  img.src = './img/MainTitle.jpg'
  
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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