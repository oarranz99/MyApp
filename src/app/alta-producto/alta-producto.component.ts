import { Component, OnInit, getPlatform } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../servicios/data.service';
import { timeStamp } from 'console';
import { format } from 'url';
import { ProductosBaseDatos } from '../entidades/productosbasedatos';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
  producto: ProductosBaseDatos;
  
  constructor( private dataService : DataService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
   	console.log(form.value)
    if (!form.valid) {
      return;
    }
    this.producto = {
      idProducto : form.value.id,
      nombre: form.value.nombre,
      precioUnitario: form.value.precio,
      descripcion: form.value.descripcion,
      fabricante:  'Esto es un fabricante fij0',
      categoria: 'Esto es una categoria fij0',
      unidadesEnStock: form.value.cantidad,
      unidadesEnPedido: 4,
      condiciones: 'Esto es una condicion fija',
    }

    this.producto = form.value;
    this.dataService.addProducto(this.producto).subscribe(
      (pNuevo) => {(console.log('Nuevo ed'))},
      (error) => {(console.log('error'))}
    );
  }

}
