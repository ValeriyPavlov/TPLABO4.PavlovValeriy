import { Component, OnInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc, orderBy, query, onSnapshot } from "firebase/firestore";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked  {
  constructor(private dataService: DataService, private auth: AuthService){};


  public user: any;
  public nuevoMensaje: string = '';
  public fecha: string = '';
  public mostrar: boolean = false;
  public mensajes: string[] = [];

  @ViewChild('chatContainer') chatContainer?: any;
  autoScroll()
  {
    try 
    {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  ngAfterViewChecked(): void {
    this.autoScroll();
  }
 
  ngOnInit()
  {
    this.auth.obtenerUser().subscribe((user => {
      this.user = user?.email;
    }));
    this.refreshChat();
  }

  ngOnDestroy(): void{}

  public async EnviarMensaje()
  {
    if(this.nuevoMensaje != '')
    {
      const newChatRef = doc(collection(db, "chat"));
      await setDoc(newChatRef, {user: this.user, fecha: Date.now(), mensaje: this.nuevoMensaje});
      this.nuevoMensaje = "";
      this.autoScroll();
    }
  }

  public refreshChat()
  {
    const q = query(collection(db, "chat"), orderBy("fecha"));
    const unsub = onSnapshot(q, (col) => {
      this.mensajes = [];
      col.forEach((doc) =>{
        var usuario = doc.get("user").split("@");
        usuario = usuario[0];
        this.mensajes.push(`${this.crearHorario(new Date(doc.get("fecha")))} - ${usuario}: ${doc.get("mensaje")}`);
      });
    });
  }

  public crearHorario(horario: Date = new Date(Date.now()))
  {
    var horas = horario.getHours();
    var minutos = horario.getMinutes();
    var minutosStr = '';
    var horarioFinal = `${horas}:${minutos}`;
    if(minutos < 10)
    {
      minutosStr = '0' + minutos.toString();
      horarioFinal = `${horas}:${minutosStr}`;
    }
    return horarioFinal;
  }

}

const firebaseConfig = {
  apiKey: "AIzaSyC_n-zaJwwDOT_baENLRCAPjeEtItyobmI",
  authDomain: "tp-sala-juegos-b2d86.firebaseapp.com",
  projectId: "tp-sala-juegos-b2d86",
  storageBucket: "tp-sala-juegos-b2d86.appspot.com",
  messagingSenderId: "420853186094",
  appId: "1:420853186094:web:a65608cf7a38ffa03529bf"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
