"use strict";(self.webpackChunklazy_loading=self.webpackChunklazy_loading||[]).push([[950],{1950:(_,l,o)=>{o.r(l),o.d(l,{AhorcadoModule:()=>g});var u=o(6814),c=o(1654),e=o(5879);const s=[{path:"",component:(()=>{class r{constructor(){this.img="",this.btnLabel="Jugar",this.palabra="",this.letras="",this.pregunta="",this.equivocaciones=0,this.gano=!1,this.preguntas=["\xbfQue animal domestico es conocido por cazar ratones?","\xbfQue formacion geografica es alta y generalmente cubierta de nieve?","\xbfQue dispositivo usamos para hacer llamas y enviar mensajes?","\xbfQue postre suele ser frio y viene en una variedad de sabores?","\xbfQue estacion del a\xf1o sigue al verano?","\xbfQue objeto se utiliza para leer historias e informacion impresa?","\xbfQue vehiculo se utiliza para transportar mercancias en grandes cantidades?","\xbfQue dispositivo electronico se utiliza para navegar por internet y hacer tareas digitales?","\xbfQue vehiculo tiene dos ruedas y se impulsa pedaleando?","\xbfQue comida italiana es redonda, tiene masa, salsa y diferentes ingredientes?"],this.respuestas=["GATO","MONTA\xd1A","CELULAR","HELADO","OTO\xd1O","LIBRO","CAMION","COMPUTADORA","BICICLETA","PIZZA"]}Jugar(){"Jugar"==this.btnLabel?(this.img=`../../assets/ahorcado/${this.equivocaciones}.jpg`,this.btnLabel="Reiniciar",this.GenerarPalabra()):(this.letras="",this.pregunta="",this.equivocaciones=0,this.gano=!1,this.img=`../../assets/ahorcado/${this.equivocaciones}.jpg`,this.GenerarPalabra())}GenerarPalabra(){var i=Math.floor(10*Math.random());this.palabra=this.respuestas[i],this.pregunta=this.preguntas[i];var a=this.palabra.length;do{this.letras=this.letras+"_",a--}while(a>0)}AgregarLetra(i){if("Reiniciar"==this.btnLabel){if(-1!=this.palabra.indexOf(i)){var a=0;do{-1!=(a=this.palabra.indexOf(i,a))?(this.letras=this.setCharAt(this.letras,a,i),a+=1):a=0}while(0!=a)}else this.equivocaciones<8&&-1!=this.letras.indexOf("_")&&(this.equivocaciones=this.equivocaciones+1,this.img=`../../assets/ahorcado/${this.equivocaciones}.jpg`,8==this.equivocaciones&&(this.pregunta="",this.letras=""));this.checkearGanador()}}checkearGanador(){-1==this.letras.indexOf("_")&&this.equivocaciones<8&&(this.img="../../assets/ahorcado/ganaste.jpg")}setCharAt(i,a,t){return a>i.length-1?i:i.substring(0,a)+t+i.substring(a+1)}static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-ahorcado"]],decls:42,vars:4,consts:[[1,"bg-azul"],["type","button","value","Volver","routerLink","/home",1,"btn","btn-warning","m-3","p-2"],[1,"container","d-flex","align-items-center","justify-content-center","flex-column",2,"width","100vw","height","82.2vh"],["alt","",3,"src"],[1,"espacio"],[1,"card","bg-dark"],[1,"d-flex","justify-content-center","align-items-center"],["type","button","value","Q",1,"letra",3,"click"],["type","button","value","W",1,"letra",3,"click"],["type","button","value","E",1,"letra",3,"click"],["type","button","value","R",1,"letra",3,"click"],["type","button","value","T",1,"letra",3,"click"],["type","button","value","Y",1,"letra",3,"click"],["type","button","value","U",1,"letra",3,"click"],["type","button","value","I",1,"letra",3,"click"],["type","button","value","O",1,"letra",3,"click"],["type","button","value","P",1,"letra",3,"click"],["type","button","value","A",1,"letra",3,"click"],["type","button","value","S",1,"letra",3,"click"],["type","button","value","D",1,"letra",3,"click"],["type","button","value","F",1,"letra",3,"click"],["type","button","value","G",1,"letra",3,"click"],["type","button","value","H",1,"letra",3,"click"],["type","button","value","J",1,"letra",3,"click"],["type","button","value","K",1,"letra",3,"click"],["type","button","value","L",1,"letra",3,"click"],["type","button","value","\xd1",1,"letra",3,"click"],["type","button","value","Z",1,"letra",3,"click"],["type","button","value","X",1,"letra",3,"click"],["type","button","value","C",1,"letra",3,"click"],["type","button","value","V",1,"letra",3,"click"],["type","button","value","B",1,"letra",3,"click"],["type","button","value","N",1,"letra",3,"click"],["type","button","value","M",1,"letra",3,"click"],["type","button",1,"btn","btn-warning","m-2",3,"value","click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"input",1),e.TgZ(2,"div",2)(3,"h2"),e._uU(4,"Ahorcado"),e.qZA(),e._UZ(5,"img",3),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"h2",4),e._uU(9),e.qZA(),e.TgZ(10,"div",5)(11,"div",6)(12,"input",7),e.NdJ("click",function(){return t.AgregarLetra("Q")}),e.qZA(),e.TgZ(13,"input",8),e.NdJ("click",function(){return t.AgregarLetra("W")}),e.qZA(),e.TgZ(14,"input",9),e.NdJ("click",function(){return t.AgregarLetra("E")}),e.qZA(),e.TgZ(15,"input",10),e.NdJ("click",function(){return t.AgregarLetra("R")}),e.qZA(),e.TgZ(16,"input",11),e.NdJ("click",function(){return t.AgregarLetra("T")}),e.qZA(),e.TgZ(17,"input",12),e.NdJ("click",function(){return t.AgregarLetra("Y")}),e.qZA(),e.TgZ(18,"input",13),e.NdJ("click",function(){return t.AgregarLetra("U")}),e.qZA(),e.TgZ(19,"input",14),e.NdJ("click",function(){return t.AgregarLetra("I")}),e.qZA(),e.TgZ(20,"input",15),e.NdJ("click",function(){return t.AgregarLetra("O")}),e.qZA(),e.TgZ(21,"input",16),e.NdJ("click",function(){return t.AgregarLetra("P")}),e.qZA()(),e.TgZ(22,"div",6)(23,"input",17),e.NdJ("click",function(){return t.AgregarLetra("A")}),e.qZA(),e.TgZ(24,"input",18),e.NdJ("click",function(){return t.AgregarLetra("S")}),e.qZA(),e.TgZ(25,"input",19),e.NdJ("click",function(){return t.AgregarLetra("D")}),e.qZA(),e.TgZ(26,"input",20),e.NdJ("click",function(){return t.AgregarLetra("F")}),e.qZA(),e.TgZ(27,"input",21),e.NdJ("click",function(){return t.AgregarLetra("G")}),e.qZA(),e.TgZ(28,"input",22),e.NdJ("click",function(){return t.AgregarLetra("H")}),e.qZA(),e.TgZ(29,"input",23),e.NdJ("click",function(){return t.AgregarLetra("J")}),e.qZA(),e.TgZ(30,"input",24),e.NdJ("click",function(){return t.AgregarLetra("K")}),e.qZA(),e.TgZ(31,"input",25),e.NdJ("click",function(){return t.AgregarLetra("L")}),e.qZA(),e.TgZ(32,"input",26),e.NdJ("click",function(){return t.AgregarLetra("\xd1")}),e.qZA()(),e.TgZ(33,"div",6)(34,"input",27),e.NdJ("click",function(){return t.AgregarLetra("Z")}),e.qZA(),e.TgZ(35,"input",28),e.NdJ("click",function(){return t.AgregarLetra("X")}),e.qZA(),e.TgZ(36,"input",29),e.NdJ("click",function(){return t.AgregarLetra("C")}),e.qZA(),e.TgZ(37,"input",30),e.NdJ("click",function(){return t.AgregarLetra("V")}),e.qZA(),e.TgZ(38,"input",31),e.NdJ("click",function(){return t.AgregarLetra("B")}),e.qZA(),e.TgZ(39,"input",32),e.NdJ("click",function(){return t.AgregarLetra("N")}),e.qZA(),e.TgZ(40,"input",33),e.NdJ("click",function(){return t.AgregarLetra("M")}),e.qZA()()(),e.TgZ(41,"input",34),e.NdJ("click",function(){return t.Jugar()}),e.qZA()()()),2&a&&(e.xp6(5),e.s9C("src",t.img,e.LSH),e.xp6(2),e.Oqu(t.pregunta),e.xp6(2),e.Oqu(t.letras),e.xp6(32),e.s9C("value",t.btnLabel))},dependencies:[c.rH],styles:[".espacio[_ngcontent-%COMP%]{letter-spacing:5px}.btn[_ngcontent-%COMP%]:hover{background-color:green}.letra[_ngcontent-%COMP%]{padding:4px;margin:4px}.letra[_ngcontent-%COMP%]:hover{background-color:#eaf5ac}.bg-azul[_ngcontent-%COMP%]{background-color:#05bcb3}"]})}return r})()},{path:"**",redirectTo:""}];let p=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(s),c.Bz]})}return r})(),g=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[u.ez,p]})}return r})()}}]);