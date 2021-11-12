import { Component, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar:any;

  constructor(private gifs:GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor)

    this.gifs.buscarGifs(valor);

    this.txtBuscar.nativeElement.value='';
  }


}


