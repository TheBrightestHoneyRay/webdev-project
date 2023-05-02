import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {Gallery, News} from "../models";
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{

  favourite: News
  id = 1
  back: string
  gallery: Gallery

  constructor(private newsService: NewsService, private galleryService: GalleryService) {
    this.favourite = {} as News
    this.back = ''
    this.gallery = {} as Gallery
  }
  ngOnInit() {
    this.getNewsDetails()
    this.getGallery()
  }

  getNewsDetails(){
    return this.newsService.getNewsDetails(this.id).subscribe((news) =>{
      this.favourite = news
    })
  }

  getGallery(){
    return this.galleryService.getOneFromNewsGallery(this.id, 1).subscribe((gallery) => {
      this.gallery = gallery
    })
  }

}
