import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import {  Subscription } from 'rxjs';
import { GeneradorProductosService } from '../servicios/generador-productos.service';
import { DataService } from '../servicios/data.service';
import { ProductosBaseDatos } from '../entidades/productosbasedatos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
  providers: [GeneradorProductosService]
})
export class ListaProductosComponent implements OnInit, OnDestroy {

  productos: ProductosBaseDatos[];
  suscripcion: Subscription;

  constructor(private prodService: ProductosService,
              private datosService: DataService) { }

  ngOnInit() {
    this.loadProductosBD();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  private loadProductosBD() {
      this.datosService.getProductos().subscribe(
        datos => {
          console.log(JSON.stringify(datos));
          this.productos = datos;

        },
        err => console.log('Error get productos'  + err.message)
    );
  }



}


/*
this.productos = this.prodService.getAllProductos();
    //me suscribo para recoger los nuevos productos
    //segun se vayan generando
    this.suscripcion = this.generadorProdService.getObserbableProductos().subscribe(
      (producto) => {
        console.log(producto.nombre); 
        this.productos.push(producto);
      }
    );
*/
