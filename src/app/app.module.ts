import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyC_n-zaJwwDOT_baENLRCAPjeEtItyobmI",
  authDomain: "tp-sala-juegos-b2d86.firebaseapp.com",
  projectId: "tp-sala-juegos-b2d86",
  storageBucket: "tp-sala-juegos-b2d86.appspot.com",
  messagingSenderId: "420853186094",
  appId: "1:420853186094:web:a65608cf7a38ffa03529bf"
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularToastifyModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
