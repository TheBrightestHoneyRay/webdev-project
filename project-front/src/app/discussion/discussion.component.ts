import {Component, OnInit} from '@angular/core';
import {DiscussionsService} from "../discussions.service";
import {Discussion} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit{

  disId: number
  discussion: Discussion
  constructor(private discussionService: DiscussionsService, private route: ActivatedRoute) {
    this.disId = NaN
    this.discussion = {} as Discussion
  }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.disId = params['id']
    })

    this.getDiscussionDetails()
  }

  getDiscussionDetails(){
    return this.discussionService.getDiscussionDetails(this.disId).subscribe((discussion) =>{
      this.discussion = discussion
    })
  }

}
