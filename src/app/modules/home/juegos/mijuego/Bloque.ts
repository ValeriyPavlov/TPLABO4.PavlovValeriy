import { Vector } from "./constantes";

export class Bloque {

    public imagen: HTMLImageElement = new Image();

    constructor(public ancho: number, public alto: number, public posicion: Vector, public vida:number, image:string){
        this.ancho = ancho;
        this.alto = alto;
        this.posicion = posicion;
        this.vida = vida;
        this.imagen.src = image;
    }


}