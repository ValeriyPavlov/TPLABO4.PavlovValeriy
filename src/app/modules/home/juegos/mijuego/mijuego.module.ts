import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MijuegoRoutingModule } from './mijuego-routing.module';
import { MijuegoComponent } from './mijuego.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MijuegoComponent
  ],
  imports: [
    CommonModule,
    MijuegoRoutingModule,
    FormsModule
  ]
})
export class MijuegoModule { }
