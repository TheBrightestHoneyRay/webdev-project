import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {ActivatedRoute} from "@angular/router";
import {Commentary, Discussion} from "../models";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comicsId: number;
  commentaries: Commentary[]
  review: string
  isLogged: boolean
  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
    this.commentaries = []
    this.comicsId = NaN
    this.review = ''
    this.isLogged = false
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.comicsId = params['id']
    })
    this.getComments(this.comicsId)
    this.showUrl()
  }

  getComments(com_id: number){
    this.commentsService.getComments(com_id).subscribe((comments) =>{
      this.commentaries = comments
    })
  }

  postReview(){
    if(this.review.length) {
      if (!this.isLogged) {
        this.commentsService.postAnonymousComment(this.comicsId, this.review).subscribe((comment) => {
          this.commentaries.push(comment)
          this.review = ''
        })
      }
    }
  }

  showUrl(){
    alert(this.route)
  }

}
