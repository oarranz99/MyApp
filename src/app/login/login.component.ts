import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logueado = false;
  constructor(private autService: AutenticationService) { }

  ngOnInit() {
  }
  public login(){
    this.logueado = this.autService.getEstaLogueado();
  }
}
