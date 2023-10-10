import { Component, AfterViewChecked, OnInit} from '@angular/core';
import { Bloque } from './Bloque';
import { Paleta } from "./Paleta";
import { Pelota } from "./Pelota";
import { PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_SPEED, PADDLE_STARTX, PALETA_IMAGE, BALL_SIZE, BALL_STARTX, BALL_STARTY, BALL_SPEED, BRICK_IMAGES, LEVEL, STAGE_COLS, STAGE_ROWS, STAGE_PADDING, BRICK_HEIGHT, BRICK_WIDTH, BRICK_ENERGY, BRICK_PADDING, PELOTA_IMAGE } from './constantes';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.scss']
})
export class MijuegoComponent implements OnInit, AfterViewChecked{

  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  public puntaje: number = 0;
  public btnJugar: string = "Jugar";
  public info: string = "Presiona Jugar para iniciar el juego!";

  public corriendo:boolean = false;

  constructor(){
    this.canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    this.context = null;
    this.btnJugar = "Jugar";
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
  }

  limpiarCanvas(){
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  jugar()
  {
    if(this.corriendo == false)
    {
      this.corriendo = true;
      this.btnJugar = "Terminar";
      this.info = "Presiona Terminar para terminar el juego.";
    }
    else
    {
      this.corriendo = false;
      this.btnJugar = "Jugar";
      this.info = "Presiona Jugar para iniciar el juego!";
      this.puntaje = 0;
    }

    const pelota = new Pelota(BALL_SPEED, BALL_SIZE, {x: BALL_STARTX, y: BALL_STARTY}, PELOTA_IMAGE);
    const bloques = this.crearFiguras();
    const paleta = new Paleta(PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, {x: PADDLE_STARTX, y: (this.canvas.height - PADDLE_HEIGHT - 5)}, PALETA_IMAGE);

    this.gameLoop(bloques, paleta, pelota);

  }

  gameLoop(bloques:any, paleta:Paleta, pelota:Pelota)
  {
    this.limpiarCanvas();
    this.dibujar(bloques);
    this.dibujarFigura(paleta);
    this.dibujarFigura(pelota);
    pelota.moverPelota();
    if((paleta.izquierda && paleta.posicion.x > 0) || (paleta.derecha && paleta.posicion.x < this.canvas.width - paleta.ancho))
    {
      paleta.moverPaleta();
    }
    this.chequearColisionPelota(pelota, paleta);
    const colisiona = this.chequearColisionBloques(pelota, bloques);
    if (colisiona)
    {
      this.puntaje++;
    }

    if(pelota.posicion.y > this.canvas.height)
    {
      this.corriendo = false;
      this.info = `Perdiste! El juego finalizo! Obtuviste ${this.puntaje} puntos.`;
      this.puntaje = 0;
      this.btnJugar = "Jugar";
      this.limpiarCanvas();
    }
    if(bloques.length === 0)
    {
      this.corriendo = false;
      this.info = `Felicidades! Ganaste! Tu puntaje: ${this.puntaje}`;
      this.puntaje = 0;
      this.btnJugar = "Jugar";
      this.limpiarCanvas();
    }
    if(this.corriendo == true)
    {
      requestAnimationFrame(() => this.gameLoop(bloques, paleta, pelota));
    }
    else
    {
      this.limpiarCanvas();
    }
  }

  dibujarFigura(figura: Bloque | Paleta | Pelota){
    if (!figura) return;
    this.context?.drawImage(figura.imagen, figura.posicion.x, figura.posicion.y, figura.ancho, figura.alto);
  }

  dibujar(figuras: Bloque[]){
    figuras.forEach(figura => this.dibujarFigura(figura));
  }

  crearFiguras(){
    return LEVEL.reduce((act, elem, iter) => {
      const row = Math.floor((iter + 1) / STAGE_COLS);
      const col = iter % STAGE_COLS;

      const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
      const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

      if(elem === 0) return act;
      return [...act, new Bloque(BRICK_WIDTH, BRICK_HEIGHT, {x,y}, BRICK_ENERGY[elem], BRICK_IMAGES[elem])];
    }, [] as Bloque[]);
  }

  chequearColisionPelota(pelota: Pelota, paleta: Paleta){
    if(pelota.posicion.x + pelota.ancho > paleta.posicion.x && pelota.posicion.x < paleta.posicion.x + paleta.ancho && pelota.posicion.y + pelota.alto === paleta.posicion.y )
    {
      pelota.cambiarDireccionY();
    }
    if(pelota.posicion.x > this.canvas.width - pelota.ancho || pelota.posicion.x < 0)
    {
      pelota.cambiarDireccionX();
    }
    if(pelota.posicion.y < 0)
    {
      pelota.cambiarDireccionY();
    }
  }

  colisionaConBloque(pelota: Pelota, bloque: Bloque)
  {
    if(pelota.posicion.x < bloque.posicion.x + bloque.ancho && pelota.posicion.x + pelota.ancho > bloque.posicion.x && pelota.posicion.y < bloque.posicion.y + bloque.alto && pelota.posicion.y + pelota.alto > bloque.posicion.y)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  chequearColisionBloques(pelota: Pelota, bloques: Bloque[])
  {
    let colision = false;
    bloques.forEach((bloque, i) => {
      if(this.colisionaConBloque(pelota, bloque))
      {
        pelota.cambiarDireccionY();
        if(bloque.vida === 1)
        {
          bloques.splice(i, 1);
        }
        else
        {
          bloque.vida--;
        }
        colision = true;
      }
    });
    return colision;
  }

}
