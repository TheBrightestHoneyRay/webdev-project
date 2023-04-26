import {Component, OnInit} from '@angular/core';
import {DiscussionsService} from "../discussions.service";
import {Discussion} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit{

  discussions: Discussion[]

  constructor(private disService: DiscussionsService, private route: ActivatedRoute) {
    this.discussions = []
  }

  ngOnInit() {
    this.getDiscussions()
  }

  getDiscussions(){
      this.disService.getDiscussions().subscribe((discussion) =>{
        this.discussions = discussion
      })
  }

  showRoute(){
    alert(this.route)
  }

}
