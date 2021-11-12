import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = []

	historial(){

		return [...this._historial];

	}

	buscarGifs(query:string){

		this._historial.unshift(query); //Modifica el primer calor del arreglo

		console.log(this._historial);

	}

}
