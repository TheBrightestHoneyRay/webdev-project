import {Component, OnInit} from '@angular/core';
import {flush} from "@angular/core/testing";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'project-front';


}
