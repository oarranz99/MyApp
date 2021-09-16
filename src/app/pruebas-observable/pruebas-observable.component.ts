import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pruebas-observable',
  templateUrl: './pruebas-observable.component.html',
  styleUrls: ['./pruebas-observable.component.css']
})
export class PruebasObservableComponent implements OnInit {

  constructor() {
     console.log('...... constructo de PruebasObservableComponent');
   }

  ngOnInit() {
     console.log('...... onInit de PruebasObservableComponent.');
     const miObservable = Observable.create( (observer) => {
          let contador = 0;
          setInterval( () => {
            observer.next(contador);
            contador ++;
            if (contador === 10){
              observer.error(new Error('no puedo enviar . error....'));
              //observer.complete();
            }
          }, 1000);
     } );

     miObservable.subscribe(
       (datos) => {console.log(datos); },
       (err) => { console.log(err); },
       () => { console.log('finalizo'); }
     );

     const m = Observable.create((observer) => {
        console.log(' envio uno')
        observer.next('... uno');
        observer.complete();
     });//fin funcion 

     m.subscribe(
       (datos) => { console.log('recibo ' + datos);}
     );

     console.log('estoy aqui');

  }
 

}
