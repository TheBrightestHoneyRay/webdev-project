import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  isLogged: boolean
  constructor() {
    this.isLogged = false
  }

  login(){
    this.isLogged = true
  }

  logof(){
    this.isLogged = false
  }

  logged(){
    return this.isLogged
  }
}
