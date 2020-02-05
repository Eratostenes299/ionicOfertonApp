import { Component, OnInit  } from '@angular/core';
import { AnunciosServicesService } from '../../services/anuncios-services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
//La variable debe cambiar dinamicamente al iniciar sesion el usuario
  usuario = 'Jonathan Chiriboga';
  constructor(private anuncios: AnunciosServicesService) {}

  ngOnInit(){
    return this.anuncios.getAnuncios().subscribe(resp =>{
      console.log(resp);
    });
  }
}
