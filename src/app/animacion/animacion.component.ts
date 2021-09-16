import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  animations: [
  trigger('sizeAnimation', [
  state('small', style({
  transform:'scale(1)', 
  backgroundColor: 'green'
  })),
  state('large', style({
  transform: 'scale(1.4)', 
  backgroundColor: 'red'
  })),
  transition('small => large', animate('100ms ease-in')),
  transition('large => small', animate('100ms ease-out'))
  ])
  ]
})
export class AnimacionComponent implements OnInit {

  estado: String = 'small';

  constructor() { }

  ngOnInit() {
  }
  onChange(){
    if (this.estado === 'small ') {
      this.estado ==='large';
    }
  }
}
