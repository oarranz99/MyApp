import { Component, OnInit } from '@angular/core';
import { Producto } from '../entidades/producto';
import { LoginService } from '../servicios/login.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: Producto ;

  constructor(private logService: LoginService,
              private  prodService: ProductosService) {
    this.producto = this.prodService.getProducto(1);
  }

  ngOnInit() {
      this.logService.logToConsole('pppEl producto con una zanahora se ha creado ');
  }

}
