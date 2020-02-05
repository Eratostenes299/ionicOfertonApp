import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichasAnunciosComponent } from './fichas-anuncios/fichas-anuncios.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { CategoriasbarComponent } from './categoriasbar/categoriasbar.component';
import { TiendasFichaComponent } from './tiendas-ficha/tiendas-ficha.component';
import { CuponComponent } from './cupon/cupon.component';


@NgModule({
  declarations: [
    FichasAnunciosComponent,
    EncabezadoComponent,
    CategoriasbarComponent,
    TiendasFichaComponent,
    CuponComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FichasAnunciosComponent,
    EncabezadoComponent,
    CategoriasbarComponent,
    TiendasFichaComponent,
    CuponComponent
  ]
})
export class ComponentsModule { }
