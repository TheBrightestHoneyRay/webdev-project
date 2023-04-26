import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  username: string
  password: string
  email: string
  users: User[]

  constructor(private userService: UserService) {
    this.username = ''
    this.email = ''
    this.password = ''
    this.users = []
  }

  ngOnInit() {
    this.getUsers()
  }

  newUser(){
    this.userService.newUser(this.username, this.password, this.email).subscribe((user) =>{
      this.users.push(user)
      this.email = ''
      this.password = ''
      this.username = ''
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) =>{
      this.users = users
    })
  }
}
