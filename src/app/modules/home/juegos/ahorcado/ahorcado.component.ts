import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {

  public img: string = "";
  public btnLabel = "Jugar";
  public palabra = "";
  public letras = "";
  public pregunta = "";
  public equivocaciones = 0;
  public gano: boolean = false;
  
  public teclas = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  public preguntas = ["¿Que animal domestico es conocido por cazar ratones?", "¿Que formacion geografica es alta y generalmente cubierta de nieve?", "¿Que dispositivo usamos para hacer llamas y enviar mensajes?", "¿Que postre suele ser frio y viene en una variedad de sabores?", "¿Que estacion del año sigue al verano?", "¿Que objeto se utiliza para leer historias e informacion impresa?", "¿Que vehiculo se utiliza para transportar mercancias en grandes cantidades?", "¿Que dispositivo electronico se utiliza para navegar por internet y hacer tareas digitales?", "¿Que vehiculo tiene dos ruedas y se impulsa pedaleando?", "¿Que comida italiana es redonda, tiene masa, salsa y diferentes ingredientes?"];
  public respuestas = ["GATO", "MONTAÑA", "CELULAR", "HELADO", "OTOÑO", "LIBRO", "CAMION", "COMPUTADORA", "BICICLETA", "PIZZA"];

  public Jugar()
  {
    if (this.btnLabel == "Jugar")
    {
      this.img = `../../assets/ahorcado/${this.equivocaciones}.jpg`;
      this.btnLabel = "Reiniciar";
      this.GenerarPalabra();
    }
    else
    {
      this.letras = "";
      this.pregunta = "";
      this.equivocaciones = 0;
      this.gano = false;
      this.img = `../../assets/ahorcado/${this.equivocaciones}.jpg`;
      this.teclas = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
      this.GenerarPalabra();
    }
  }

  public GenerarPalabra()
  {
    var indice = Math.floor(Math.random() * 10);
    this.palabra = this.respuestas[indice];
    this.pregunta = this.preguntas[indice];
    var tamanio = this.palabra.length;
    do{
      this.letras = this.letras + "_";
      tamanio--;
    }while (tamanio > 0)
  }

  public AgregarLetra(letra: string, dis: number)
  {
    if(this.btnLabel == "Reiniciar")
    {
      this.teclas[dis] = true;
      if(this.palabra.indexOf(letra) != -1)
      {
        var currentIndex = 0;
        this.teclas[dis] = true;
        console.log(this.teclas[dis]);
        do
        {
          currentIndex = this.palabra.indexOf(letra, currentIndex);
          if(currentIndex != -1)
          {
            this.letras = this.setCharAt(this.letras, currentIndex, letra);
            currentIndex = currentIndex + 1;
          }
          else
          {
            currentIndex = 0;
          }
        }while(currentIndex != 0);
      }
      else
      {
        if(this.equivocaciones < 8 && this.letras.indexOf("_") != -1 )
        {
          this.equivocaciones = this.equivocaciones + 1;
          this.img = `../../assets/ahorcado/${this.equivocaciones}.jpg`;
          if (this.equivocaciones == 8)
          {
            this.pregunta = "";
            this.letras = "";
          }
        }
      }
      this.checkearGanador();
    }
  }

  public checkearGanador(){
    if (this.letras.indexOf("_") == -1 && this.equivocaciones < 8)
    {
      this.img = `../../assets/ahorcado/ganaste.jpg`;
    }
  }

  public setCharAt(str:string, index: number, chr: string) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
  }

}
