import { Injectable } from '@angular/core';
import { Producto } from '../entidades/producto';
import { LoginService } from './login.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [
    new Producto(1, 'zahorias', 'super sanas', 2, 30),
    new Producto(2, 'libro', 'muy educativo', 3, 30)
  ];

  constructor(private log: LoginService,
              private dataSercvice: DataService) {

  }

  public getProducto(id: number):Producto{
      return this.productos[id];
  }

  public getAllProductos(): Producto[]{
    return this.productos;
  }

}
