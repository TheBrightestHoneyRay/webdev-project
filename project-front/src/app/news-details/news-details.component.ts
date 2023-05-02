import {Component, OnInit} from '@angular/core';
import {News} from "../models";
import {NewsService} from "../news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit{

  news: News
  id: number

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.news = {} as News
    this.id = NaN
  }

  ngOnInit() {
    this.getNewsId()
    this.getNewsDetails()
  }

  getNewsDetails(){
    this.newsService.getNewsDetails(this.id).subscribe((news)=>{
      this.news = news
    })
  }

  getNewsId(){
    this.route.params.subscribe((params) =>{
      this.id = params['id']
    })
  }

}
