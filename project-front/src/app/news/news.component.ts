import {Component, OnInit} from '@angular/core';
import {Comics, News} from "../models";
import {ComicsService} from "../comics.service";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news: News[]
  constructor(private newsService: NewsService) {
    this.news = []
  }

  ngOnInit() {
    this.getNews()
  }

  getNews(){
    return this.newsService.getNews().subscribe((news)=>{
      this.news = news
    })
  }

}
