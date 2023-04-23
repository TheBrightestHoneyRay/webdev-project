import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {ActivatedRoute} from "@angular/router";
import {Commentary} from "../models";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comicsId: number;
  commentaries: Commentary[]
  review: string
  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
    this.commentaries = []
    this.comicsId = NaN
    this.review = ''
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.comicsId = params['id']
    })
    this.getComments(this.comicsId)
  }

  getComments(id: number){
    this.commentsService.getComments(id).subscribe((comments) =>{
      this.commentaries = comments
    })
  }

  postReview(comicsId: number){
    /* create new Comment here */
  }

}
