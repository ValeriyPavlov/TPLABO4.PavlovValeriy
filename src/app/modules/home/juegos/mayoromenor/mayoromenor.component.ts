import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-mayoromenor',
  templateUrl: './mayoromenor.component.html',
  styleUrls: ['./mayoromenor.component.scss']
})
export class MayoromenorComponent {

  constructor(private cardService: CardsService){}

  public cartaActual = "";
  public puntaje = 0;
  public bandera = false;
  public btnLabel = "Jugar";
  public indexActual = -1;
  public cartaImg = ""; 
  public cartas: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  public mensaje = "";
  public perdio: boolean = false;

  public JugarReiniciar(){
    if(this.bandera == false)
    {
      this.PrimeraCarta();
      this.btnLabel = "Reiniciar";
      this.bandera = true;
      //this.cardService.mostrarCartaRandom(); // Ver como implementar desde la API
    }
    else
    {
      this.cartaActual = "";
      this.bandera = false;
      this.btnLabel = "Jugar";
      this.puntaje = 0;
      this.indexActual = -1;
      this.cartaImg = "";
      this.mensaje = "";
      this.perdio = false;
    }
  }

  public AsignarImagen(carta: string){
    var random = Math.floor((Math.random() * 4));
    this.cartaImg = `../../../assets/cards/${carta}${random}.png`;
  }

  public Mayor(){
    if (this.indexActual > -1 && this.perdio == false)
    {
      do
      {
        var random = Math.floor((Math.random() * 13));
      }while(this.indexActual == random);
      if(this.indexActual < random)
      {
        this.puntaje = this.puntaje + 1;
      }
      else
      {
        this.mensaje = `Terminó el juego! Obtuviste un puntaje de: ${this.puntaje}!`;
        this.perdio = true;
      }
      this.indexActual = random;
      this.cartaActual = this.cartas[random];
      this.AsignarImagen(this.cartas[random]);
    }
  }

  public Menor(){
    if (this.indexActual > -1 && this.perdio == false)
    {
      do
      {
        var random = Math.floor((Math.random() * 13));
      }while(this.indexActual == random);
      if(this.indexActual > random)
      {
        this.puntaje = this.puntaje + 1;
      }
      else
      {
        this.mensaje = `Terminó el juego! Obtuviste un puntaje de: ${this.puntaje}!`;
        this.perdio = true;
      }
      this.indexActual = random;
      this.cartaActual = this.cartas[random];
      this.AsignarImagen(this.cartas[random]);
    }
  }

  public PrimeraCarta(){
    var random = Math.floor((Math.random() * 13));
    this.indexActual = random;
    this.cartaActual = this.cartas[random];
    this.AsignarImagen(this.cartas[random]);
  }


}
