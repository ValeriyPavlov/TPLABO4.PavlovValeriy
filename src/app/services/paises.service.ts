import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  api: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  traerTodos(): Observable<any>
  {
    return this.http.get(this.api + 'all');
  }

  pais(nombrePais:string): Observable<any>
  {
    return this.http.get(this.api + 'name/' + nombrePais);
  }
}
