import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  public generarCartas()
  {
    return this.http.get('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1');
  }

  //
  mostrarCartaRandom() {
    return new Promise((resolve, reject) => 
    {
      this.generarCartas().subscribe((data: any) => 
      {
        console.log(data);
        resolve(data);
      });
    });
  }
}
