import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {User} from "../models";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  logged: boolean
  username: string
  password: string
  user: User
  users: User[]

  constructor(private userService: UserService) {
    this.username = ''
    this.password = ''
    this.logged = false
    this.user = {} as User
    this.users = []
  }

  ngOnInit() {
    this.getUsers()
  }

  login() {
    for(let user of this.users){
      if (user.user_name == this.username){
        if (user.password == this.password){
          this.logged = true
          this.user = user
        }
      }
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) =>{
      this.users = users
    })
  }
}
