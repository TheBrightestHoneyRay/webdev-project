import {Component, OnInit} from '@angular/core';
import {User} from "../models";
import {LogInComponent} from "../log-in/log-in.component";
import {LoggedService} from "../logged.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

  isLogged: boolean
  user: User

  constructor(private logService: LoggedService, private userService: UserService) {
    this.user = {} as User
    this.isLogged = false
  }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe((user) =>{
      this.user = user
    })
  }

  onLogOut(){
    this.isLogged = false
  }

}
