import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {User} from "../models";
import {LoggedService} from "../logged.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  username: string
  password: string

  constructor(private userService: UserService, private logService: LoggedService, private route: Router) {
    this.username = ''
    this.password = ''
  }

  ngOnInit() {
  }

  onLogin(){
    this.logService.loginUser(this.username, this.password).subscribe(() =>{
      this.logService.isLogged = true
      this.getUser()
      this.route.navigate(['/home'])
    })
  }

  getUser(){
    this.userService.getUser().subscribe((user) => {
      this.logService.loggedUser = user
    })
  }

}
