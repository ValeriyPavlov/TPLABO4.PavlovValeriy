"use strict";(self.webpackChunklazy_loading=self.webpackChunklazy_loading||[]).push([[624],{2624:(g,o,r)=>{r.r(o),r.d(o,{MayoromenorModule:()=>m});var h=r(6814),s=r(1654),t=r(5879),u=r(9862);let l=(()=>{class a{constructor(e){this.http=e}generarCartas(){return this.http.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=1")}mostrarCartaRandom(){return new Promise((e,n)=>{this.generarCartas().subscribe(i=>{console.log(i),e(i)})})}static#t=this.\u0275fac=function(n){return new(n||a)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();const d=[{path:"",component:(()=>{class a{constructor(e){this.cardService=e,this.cartaActual="",this.puntaje=0,this.bandera=!1,this.btnLabel="Jugar",this.indexActual=-1,this.cartaImg="",this.cartas=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],this.mensaje="",this.perdio=!1}JugarReiniciar(){0==this.bandera?(this.PrimeraCarta(),this.btnLabel="Reiniciar",this.bandera=!0):(this.cartaActual="",this.bandera=!1,this.btnLabel="Jugar",this.puntaje=0,this.indexActual=-1,this.cartaImg="",this.mensaje="",this.perdio=!1)}AsignarImagen(e){var n=Math.floor(4*Math.random());this.cartaImg=`../../../assets/cards/${e}${n}.png`}Mayor(){if(this.indexActual>-1&&0==this.perdio){do{var e=Math.floor(13*Math.random())}while(this.indexActual==e);this.indexActual<e?this.puntaje=this.puntaje+1:(this.mensaje=`Termin\xf3 el juego! Obtuviste un puntaje de: ${this.puntaje}!`,this.perdio=!0),this.indexActual=e,this.cartaActual=this.cartas[e],this.AsignarImagen(this.cartas[e])}}Menor(){if(this.indexActual>-1&&0==this.perdio){do{var e=Math.floor(13*Math.random())}while(this.indexActual==e);this.indexActual>e?this.puntaje=this.puntaje+1:(this.mensaje=`Termin\xf3 el juego! Obtuviste un puntaje de: ${this.puntaje}!`,this.perdio=!0),this.indexActual=e,this.cartaActual=this.cartas[e],this.AsignarImagen(this.cartas[e])}}PrimeraCarta(){var e=Math.floor(13*Math.random());this.indexActual=e,this.cartaActual=this.cartas[e],this.AsignarImagen(this.cartas[e])}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(l))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-mayoromenor"]],decls:18,vars:4,consts:[[1,"bg-marron"],["type","button","value","Volver","routerLink","/home",1,"btn","btn-info","m-3","p-2"],[1,"container","d-flex","justify-content-center","align-items-center","flex-column",2,"width","100vw","height","82.2vh"],[1,"card","m-2","p-1","bg-dark","text-white"],[1,"card","m-2","p-1","d-flex","flex-row"],["src","../../../assets/cards/deck.png","alt",""],["alt","",3,"src"],[1,"text-danger","m-2"],[1,"text-lg"],[1,"card","d-flex","flex-row","bg-dark"],["type","button","value","Mayor",1,"btn","btn-secondary","m-1","p-4",3,"click"],["type","button","value","Menor",1,"btn","btn-secondary","m-1","p-4",3,"click"],["type","button",1,"btn","btn-primary","m-1","p-5",3,"value","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"input",1),t.TgZ(2,"div",2)(3,"h1"),t._uU(4,"Mayor o Menor"),t.qZA(),t.TgZ(5,"div",3)(6,"h2"),t._uU(7),t.qZA()(),t.TgZ(8,"div",4),t._UZ(9,"img",5)(10,"img",6),t.qZA(),t.TgZ(11,"div",7)(12,"h2",8),t._uU(13),t.qZA()(),t.TgZ(14,"div",9)(15,"input",10),t.NdJ("click",function(){return i.Mayor()}),t.qZA(),t.TgZ(16,"input",11),t.NdJ("click",function(){return i.Menor()}),t.qZA()(),t.TgZ(17,"input",12),t.NdJ("click",function(){return i.JugarReiniciar()}),t.qZA()()()),2&n&&(t.xp6(7),t.hij("Puntaje: ",i.puntaje,""),t.xp6(3),t.s9C("src",i.cartaImg,t.LSH),t.xp6(3),t.Oqu(i.mensaje),t.xp6(4),t.s9C("value",i.btnLabel))},dependencies:[s.rH],styles:[".bg-marron[_ngcontent-%COMP%]{background-color:#deb887}.btn[_ngcontent-%COMP%]:hover{background-color:green}"]})}return a})()},{path:"**",redirectTo:""}];let p=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(d),s.Bz]})}return a})(),m=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[h.ez,p]})}return a})()}}]);