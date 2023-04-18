import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";
import {Comics} from "../models";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics: Comics[];
  constructor(private comicsService: ComicsService) {
    this.comics = []
  }

  ngOnInit(): void{
    this.comicsService.getComics().subscribe((comics) =>{
      this.comics = comics
    })
  }
}
