import {Component, OnInit} from '@angular/core';
import {User} from "../models";
import {LogInComponent} from "../log-in/log-in.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

  logged: boolean
  user: User

  constructor() {
    this.user = {} as User
    this.logged = false
  }


  ngOnInit() {
    this.logged = false
  }

}
