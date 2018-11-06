


window.onload = function () {

  

  document.getElementById("start-button").onclick = function () {
    
    var game = new Game("canvasID");
    game.start();
    game.audio();

  };
};