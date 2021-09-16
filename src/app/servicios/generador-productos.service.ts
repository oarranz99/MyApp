import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Producto } from '../entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class GeneradorProductosService {

  private crearProductoObservable: Observable<Producto>;

  constructor() {
    this.crearProductoObservable = Observable.create((observer) => {
      let contador = 3;
      setInterval(() => {
          observer.next( new Producto(contador, 'prodc' + contador, 'super sanas', 2, 30));
          if ( ++ contador === 10) { observer.complete() }
      }, 2000);
    });
  }

  public getObserbableProductos(): Observable<Producto>{
    return this.crearProductoObservable;
  }

}
