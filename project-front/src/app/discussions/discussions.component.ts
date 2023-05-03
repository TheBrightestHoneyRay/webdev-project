import {Component, OnInit} from '@angular/core';
import {DiscussionsService} from "../discussions.service";
import {Discussion} from "../models";
import {ActivatedRoute} from "@angular/router";
import {LoggedService} from "../logged.service";

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

  constructor(private disService: DiscussionsService, private route: ActivatedRoute, private logService: LoggedService) {
    this.title = ''
    this.discussions = []
    this.isLogged = logService.logged()
    this.creator = 'anonymous'
  }

  ngOnInit() {
    this.getDiscussions()
    this.logged()

  }

  getDiscussions(){
      this.disService.getDiscussions().subscribe((discussion) =>{
        this.discussions = discussion
      })
  }

  newDiscussion(){
    if(this.title.length){
      this.disService.createDiscussion(this.title, this.creator).subscribe((discussion) =>{
        this.discussions.push(discussion)
        this.title = ''
      })
    }
  }

  logged(){
    if(!this.isLogged){
      this.creator = 'anonymous'
    }
  }

  showRoute(){
    alert(this.route)
  }

}
