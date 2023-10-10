import { Vector } from "./constantes";

export class Paleta {
    public imagen: HTMLImageElement = new Image();
    public derecha: boolean;
    public izquierda: boolean;

    constructor(public velocidad: number, public ancho: number, public alto: number, public posicion: Vector, imagen: string){
        this.velocidad = velocidad;
        this.ancho = ancho;
        this.alto = alto;
        this.posicion = posicion;
        this.izquierda = false;
        this.derecha = false;
        this.imagen.src = imagen;

        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }

    moverPaleta()
    {
        if(this.izquierda) this.posicion.x -= this.velocidad;
        if(this.derecha) this.posicion.x += this.velocidad;
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.izquierda = false;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.derecha = false;
    }

    handleKeyDown = (e: KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.izquierda = true;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.derecha = true;
    }



}