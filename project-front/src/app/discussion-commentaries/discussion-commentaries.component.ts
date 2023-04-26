import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Commentary} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-discussion-commentaries',
  templateUrl: './discussion-commentaries.component.html',
  styleUrls: ['./discussion-commentaries.component.css']
})
export class DiscussionCommentariesComponent implements OnInit{

  disId: number
  commentaries: Commentary[]
  comment: string
  isLogged: boolean

  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
    this.disId = NaN
    this.commentaries = []
    this.comment = ''
    this.isLogged = false

  }

  ngOnInit() {
    this.getDiscussionId()
    this.getDiscussionComments(this.disId)
  }

  getDiscussionId(){
    this.route.params.subscribe((params) =>{
      this.disId = params['id']
    })
  }
  getDiscussionComments(dis_id: number){
    this.commentsService.getDiscussionComments(dis_id).subscribe((comments) => {
      this.commentaries = comments
    })
  }

  postComment(){
    if(this.comment.length) {
      if (!this.isLogged) {
        this.commentsService.postAnonymousDisComment(this.disId, this.comment).subscribe((comment) => {
          this.commentaries.push(comment)
          this.comment = ''
        })
      }
    }
  }
}
