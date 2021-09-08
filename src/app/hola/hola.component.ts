import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})

export class HolaComponent implements OnInit {
  @Input() nombre: string;
  fechaNac;
  mostrar = true;
  claseTitulo;

  constructor() {
    console.log('Iniciando comonente');
    this.nombre = 'Begoña';
    this.fechaNac = Date.now();
    this.claseTitulo = 'titulo1';
   }

  ngOnInit() {
    console.log('onInit')
  }
  cambiarTitulo():void {
    if(this.claseTitulo = 'titulo1' ) {
      this.claseTitulo = 'titulo2';
    }else if(this.claseTitulo = 'titulo2'){
      this.claseTitulo = 'titulo1';
    }
  
  }
  onClickBoton(event){

  }
}
