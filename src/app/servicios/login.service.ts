import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logToConsole(msg: string) {
    console.log('*****' + msg);
  }
}
