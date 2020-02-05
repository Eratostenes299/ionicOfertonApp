import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnunciosServicesService {

  constructor(private http: HttpClient ) { }

  getAnuncios(){
   return this.http.get('https://calm-inlet-04361.herokuapp.com/anuncios');
  };
}
