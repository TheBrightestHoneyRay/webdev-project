import {Component, OnInit} from '@angular/core';
import {Discussion} from "../models";
import {DiscussionsService} from "../discussions.service";

@Component({
  selector: 'app-discussion-bundle',
  templateUrl: './discussion-bundle.component.html',
  styleUrls: ['./discussion-bundle.component.css']
})
export class DiscussionBundleComponent implements OnInit{
  discussions: Discussion[]

  constructor(private discussionService: DiscussionsService) {
    this.discussions = []
  }
  ngOnInit() {
    this.getDiscussions()
  }

  getDiscussions(){
    this.discussionService.recentDiscussions().subscribe((discussions) => {
      this.discussions = discussions
    })
  }

}
