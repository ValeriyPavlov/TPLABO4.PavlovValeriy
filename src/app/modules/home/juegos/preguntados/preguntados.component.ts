import { Component, OnInit} from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { PaisesService } from 'src/app/services/paises.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  constructor(private dataService: DataService, private paisesService: PaisesService){}

  public banderaJugar: boolean = false;
  public banderaPuntaje: boolean = true;
  public index = 0;
  public claseBoton = true;
  public btnLabel = "Jugar";
  public jugador = this.dataService.userName;
  public pregunta: string = "";
  public respuestaA: string = "";
  public respuestaB: string = "";
  public respuestaC: string = "";
  public correcta: string = "";
  public puntaje = 0;
  public reintentos = 2;
  public mostrarA: boolean = true;
  public mostrarB: boolean = true;
  public mostrarC: boolean = true;
  public misBanderas: any[] | undefined;
  public misPaises: Observable<any>|undefined;
  public bandera: string = "";

  public lista: any[] = [];
  public listaOriginal: any = [
    {"pregunta": "¿A cuál de los siguientes paises le pertenece esta bandera?", "a": "Bolivia", "b": "Alemania", "c": "Kenya", "correcta": "c", "bandera": "Kenya"},
    {"pregunta": "¿Cuál es la capital de Canada?", "a": "Calgary", "b": "Ottawa", "c": "Montreal", "correcta": "b", "bandera": "Canada"},
    {"pregunta": "¿Cuál es el monumento iconico de Estados Unidos que fue un regalo de Francia?", "a": "Estatua de la Libertad", "b": "Puente Golden Gate", "c": "El Arco Gateway", "correcta": "a", "bandera": "United States"},
    {"pregunta": "¿Cuál es la ciudad peruana conocida como 'Ciudad Blanca'?", "a": "Lima", "b": "Trujillo", "c": "Arequipa", "correcta": "c", "bandera": "Peru"},
    {"pregunta": "¿Cuál es el rio mas largo de Brasil?", "a": "Amazonas", "b": "Parana", "c": "Nilo", "correcta": "a", "bandera": "Brasil"},
    {"pregunta": "¿Cuál es la montaña más alta de Argentina y la más alta de toda América del Sur?", "a": "Monte Pissis", "b": "Bonete Chico", "c": "Aconcagua", "correcta": "c", "bandera": "Argentina"},
    {"pregunta": "¿Qué festividad alemana, conocida por la cerveza y la música tradicional, se celebra principalmente en Bavaria?", "a": "Septemberfest", "b": "Oktoberfest", "c": "4th of July", "correcta": "b", "bandera": "Germany"},
    {"pregunta": "¿Qué famosa pintura se encuentra en el Museo del Louvre de París y fue pintada por Leonardo da Vinci?", "a": "La Mona Lisa", "b": "El Grito", "c": "La Ultima Cena", "correcta": "a", "bandera": "France"},
    {"pregunta": "¿Cuál es el nombre del famoso reloj de torre ubicado en el Palacio de Westminster en Londres?", "a": "Buckingham", "b": "Stonehedge", "c": "Big Ben", "correcta": "c", "bandera": "Great Britain"},
    {"pregunta": "¿Cuál es el nombre del tren de larga distancia que conecta Moscú con Vladivostok, atravesando casi toda Rusia?", "a": "Tren Bala", "b": "Transiberiano", "c": "Transatlantico", "correcta": "b", "bandera": "Russia"},
    {"pregunta": "¿Cuál es la capital de China?", "a": "Pekín", "b": "Shanghái", "c": "Cantón", "correcta": "a", "bandera": "China"},
    {"pregunta": "¿Qué desierto se encuentra en el interior de Australia y es uno de los desiertos más secos y áridos del mundo?", "a": "Adams", "b": "Simpson", "c": "Sydney", "correcta": "b", "bandera": "Australia"},
    {"pregunta": "¿Cuál es el nombre de la famosa esfinge monumental de Egipto que tiene el cuerpo de un león y la cabeza de un faraón?", "a": "Esfinge de Edfu", "b": "Gran Esfinge de Karnak", "c": "Gran Esfinge de Guiza", "correcta": "c", "bandera": "Egypt"},
    {"pregunta": "¿En qué año obtuvo la República Democrática del Congo su independencia de Bélgica?", "a": "1945", "b": "1890", "c": "1960", "correcta": "c", "bandera": "Congo"},
    {"pregunta": "¿Qué líder militar mongol fundó el Imperio Mongol y es conocido por sus conquistas en Eurasia en el siglo XIII?", "a": "Jar Galnat", "b": "Genghis Khan", "c": "Khal Drogo", "correcta": "b", "bandera": "Mongolia"},
    {"pregunta": "¿Cuál es la ciudad italiana conocida como 'La Ciudad de los Canales' debido a sus vías acuáticas y góndolas?", "a": "Venecia", "b": "Milan", "c": "Roma", "correcta": "a", "bandera": "Italy"},
    {"pregunta": "¿Cuál es el nombre de la antigua civilización mesoamericana que construyó las pirámides de Teotihuacán y Chichen Itzá?", "a": "Aztecas", "b": "Mayas", "c": "Incas", "correcta": "b", "bandera": "Mexico"}
  ];

  ngOnInit(): void {
    this.paisesService.traerTodos().subscribe( banderas => { this.misBanderas = banderas;});
    this.misPaises = this.paisesService.traerTodos();
  }

  buscarPais(nombre:string)
  {
    this.paisesService.pais(nombre).subscribe(t=> this.bandera = t[0].flags.png);
  }

  public jugar()
  {
    this.banderaJugar = !this.banderaJugar;
    if(this.btnLabel == "Jugar")
    {
      this.randomizarLista();
      this.btnLabel = "Reiniciar";
      this.banderaPuntaje = true;
      this.claseBoton = false;
      this.mostrarPregunta();
      this.index++;
    }
    else
    {
      this.claseBoton = true;
      this.btnLabel = "Jugar";
      this.index = 0;
      this.puntaje = 0;
      this.reintentos = 2;
      this.bandera = "";
    }
  }

  public randomizarLista()
  {
    this.lista = [...this.listaOriginal];
    for (var i = this.lista.length - 1; i > 0; i--) 
    {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.lista[i];
      this.lista[i] = this.lista[j];
      this.lista[j] = temp;
    }
  }

  public mostrarPregunta()
  {
    let {pregunta, a, b, c, correcta, bandera} = this.lista[this.index];
    this.pregunta = pregunta;
    this.respuestaA = a;
    this.respuestaB = b;
    this.respuestaC = c;
    this.mostrarA = true;
    this.mostrarB = true;
    this.mostrarC = true;
    this.correcta = correcta;
    this.buscarPais(bandera);
  }

  public chequearRespuesta(resp:string)
  {
    if(this.index == 16)
    {
      this.puntaje += 1;
      this.banderaPuntaje = false;
      this.bandera = "";
      this.pregunta = `El juego ha finalizado, ${this.jugador} acumulaste un total de ${this.puntaje} puntos!`;
      this.mostrarA = false;
      this.mostrarB = false;
      this.mostrarC = false;
    }
    else
    {
      if(resp == this.correcta)
      {
        this.puntaje++;
        this.index++;
        this.reintentos = 2;
        this.mostrarPregunta();
      }
      else
      {
        if(this.reintentos > 1)
        {
          this.reintentos--;
          switch(resp)
          {
            case "a":
              this.mostrarA = false;
              break;
            case "b":
              this.mostrarB = false;
              break;
            case "c":
              this.mostrarC = false;
              break;
          }
        }
        else
        {
          this.index++;
          this.reintentos = 2;
          this.mostrarPregunta();
        }
      }
    }
  }


}
