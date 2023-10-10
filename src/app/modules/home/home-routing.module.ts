import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ahorcado', loadChildren: () => import('./juegos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule) },
  { path: 'mayoromenor', loadChildren: () => import('./juegos/mayoromenor/mayoromenor.module').then(m => m.MayoromenorModule) },
  { path: 'preguntados', loadChildren: () => import('./juegos/preguntados/preguntados.module').then(m => m.PreguntadosModule) },
  { path: 'mijuego', loadChildren: () => import('./juegos/mijuego/mijuego.module').then(m => m.MijuegoModule) },
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
