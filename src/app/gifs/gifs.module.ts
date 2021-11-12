import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalGifsComponent } from './principal-gifs/principal-gifs.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    PrincipalGifsComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    PrincipalGifsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
