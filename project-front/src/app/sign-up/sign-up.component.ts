import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models";
import {LoggedService} from "../logged.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  users: User[]
  username: string
  password: string
  email: string

  constructor(private userService: UserService, private logService: LoggedService, private route: Router) {
    this.username = ''
    this.email = ''
    this.password = ''
    this.users = []
  }

  ngOnInit() {
    this.getUsers()
  }

  onSignup(){
    this.logService.signupUser(this.username, this.email, this.password).subscribe((user) =>{
      this.users.push(user)
      this.username = ''
      this.email = ''
      this.password = ''
      this.route.navigate(['/log-in'])
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) =>{
      this.users = users
    })
  }
}
