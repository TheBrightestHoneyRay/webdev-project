import {Component, OnInit} from '@angular/core';
import {DiscussionsService} from "../discussions.service";
import {Discussion, User} from "../models";
import {ActivatedRoute} from "@angular/router";
import {LoggedService} from "../logged.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit{

  discussions: Discussion[]
  title: string
  creator: string
  isLogged: boolean

  constructor(private disService: DiscussionsService, private route: ActivatedRoute,
              private logService: LoggedService, private userService: UserService) {
    this.title = ''
    this.discussions = []
    this.isLogged = false
    this.creator = 'anonymous'
  }

  ngOnInit() {
    this.getDiscussions()
  }

  getDiscussions(){
      this.disService.getDiscussions().subscribe((discussion) =>{
        this.discussions = discussion
      })
  }

  newAnonymousDiscussion(){
    if(this.title.length){
      this.disService.createAnonymousDiscussion(this.title, this.creator).subscribe((discussion) =>{
        this.discussions.push(discussion)
        this.title = ''
      })
    }
  }
  showRoute(){
    alert(this.route)
  }

}
