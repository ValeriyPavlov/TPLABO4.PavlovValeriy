import { Vector} from "./constantes";

export class Pelota {
    public velocidad: Vector;
    public imagen: HTMLImageElement = new Image();
    public ancho: number;
    public alto: number;

    constructor(velocidad: number, public tam: number, public posicion: Vector, imagen: string ){
        this.ancho = tam;
        this.alto = tam;
        this.posicion = posicion;
        this.velocidad = {x: velocidad, y: -velocidad};
        this.imagen.src = imagen;
    }

    cambiarDireccionY(){
        this.velocidad.y = -this.velocidad.y; 
    }

    cambiarDireccionX(){
        this.velocidad.x = -this.velocidad.x;
    }

    moverPelota()
    {
        this.posicion.x = this.posicion.x + this.velocidad.x;
        this.posicion.y = this.posicion.y + this.velocidad.y;
    }
}