# IronRun

Proyecto tercera semana de Ironhack.

Videojuego desarrollado en JavaScript. Inspirado directamente en el juego de 1983 de Konami, Track & Field. La banda sonora es de Sonic the Hedgehog, los personajes principales del universo de Mario Bros., y los efectos sonoros de Street Fighter 2.

-------------------------------------------------------------------
``

if (event.keyCode === this.player1.runKey1) { //Entrada jugador 1
      this.player1.animateImg();
      if (this.bg.move()) { //si ha llegado al final
        if (this.player1.x > 936 && !this.player2Win && !this.player3Win && !this.player4Win) { //línea de meta - ganador
          this.stopCounter = true;
          this.player1Win = true;
        } else if (this.player1.x > 936 && this.player2.x > 936 && this.player3.x > 936 && this.player4.x > 936) {
          audioWin.play();
          clearInterval(this.interval);
          this.txtCanvas.txtReset();
          this.allFinished = true;
        }
        this.isFinished = true;
        if (this.player1.x > 1100) { // Cuando cruza la línea de meta para que se pare
        } else {
          this.player1.x += 35;
        }
      } else if (this.player1.x > 515 || this.player1.x > this.player2.x && this.player1.x > this.player3.x &&
        this.player1.x > this.player4.x) {  // Cuando llega a la mitad de la pantalla o esta delante del otro jugador
        this.move();
        this.player2.speedThrust += this.player2.thrust;
        this.player2.x -= this.player2.speedX + this.player2.speedThrust;
        this.player3.speedThrust += this.player3.thrust;
        this.player3.x -= this.player3.speedX + this.player3.speedThrust;
        this.player4.speedThrust += this.player4.thrust;
        this.player4.x -= this.player4.speedX + this.player4.speedThrust;
      } else { // al empezar o ir el último
        this.player1.x += 35;
      }
    }
    
 
 
