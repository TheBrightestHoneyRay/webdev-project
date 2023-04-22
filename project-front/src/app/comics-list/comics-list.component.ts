import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";
import {Comics} from "../models";
import {ActivatedRoute} from "@angular/router";
import {TypeService} from "../type.service";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit{
  comics: Comics[];
  categoryId: number;
  constructor(private comicsService: ComicsService, private typeService: TypeService, private route: ActivatedRoute) {
    this.comics = []
    this.categoryId = NaN

  }

  ngOnInit(): void{

    this.route.params.subscribe((params)=>{
      this.categoryId = params['id']
    })

    this.typeService.getTypeDetails(this.categoryId).subscribe((category) =>{
      this.comics = category.comics
    })
  }

  getComicsByCategory(){}
}
