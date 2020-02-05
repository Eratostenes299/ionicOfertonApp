import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-categoriasbar',
  templateUrl: './categoriasbar.component.html',
  styleUrls: ['./categoriasbar.component.scss'],
})
export class CategoriasbarComponent implements OnInit {
  categorias = ['Damas', 'Caballeros', 'Niños', 'Niñas'];
  constructor() { }
  @ViewChild(IonSegment, null) segment: IonSegment;

  ngOnInit() {  
    this.segment.value = this.categorias[0];
  }

}
