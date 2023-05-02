import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComicsService} from "../comics.service";
import {Comics} from "../models";

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit{

  comics: Comics[]
  constructor(private comicsService: ComicsService) {
    this.comics = []
  }

  ngOnInit() {
    this.getComics()
  }

  getComics(){
    this.comicsService.latestRelease().subscribe((comics) =>{
      this.comics = comics
    })
  }
}
