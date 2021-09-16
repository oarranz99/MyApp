import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosBaseDatos } from '../entidades/productosbasedatos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlBase: string = "http://127.0.0.1:8080/Proy0055_Spring_MVC-0.0.1-SNAPSHOT/rest/productos";

  constructor(private http:HttpClient) { }

  public getProductos(): Observable<ProductosBaseDatos[]>{
       return this.http.get<ProductosBaseDatos[]>(this.urlBase);
  }

  public getProducto(id : number): Observable<ProductosBaseDatos>{
     const url = `${this.urlBase}/${id}`;
     return this.http.get<ProductosBaseDatos>(url);
  }

   //POST
  public addProducto(producto: ProductosBaseDatos): Observable<ProductosBaseDatos> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'request-originating server addresses' })
    };
    const obs = this.http.post<ProductosBaseDatos>(this.urlBase, producto, httpOptions);
    //obs.subscribe((nueva) => this.altaEvent.emit(nueva.id));
    return obs;
  }

  //UPDATE
  public updateProducto(producto: ProductosBaseDatos): Observable<ProductosBaseDatos>{
     const url = `${this.urlBase}/${producto.idProducto}`;
     const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
     };
    const obs = this.http.put<ProductosBaseDatos>(url, producto, httpOptions);
    return obs;
  }

  //DELETE
  public deleteProducto(id: number): Observable<string>{
    const url = '${this.urlBase}/${id}';
    const obs = this.http.delete<string>(url);
    return obs;
  }

}
