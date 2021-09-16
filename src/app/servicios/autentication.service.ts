import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  private logueado = false;
  constructor() { }


  public login(){
    this.logueado = !this.logueado;
  }
  public getEstaLogueado(){
    return this.logueado;
  }
}
