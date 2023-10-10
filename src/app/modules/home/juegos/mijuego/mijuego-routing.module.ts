import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MijuegoComponent } from './mijuego.component';

const routes: Routes = [
  { path: '', component: MijuegoComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MijuegoRoutingModule { }
