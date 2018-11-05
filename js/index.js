
window.onload = function() {
  // var game = new Game("canvasID");

  document.getElementById("start-button").onclick = function () {
    var game = new Game("canvasID");
    game.start();
   
  };

};