import {Component, OnInit} from '@angular/core';
import {Comics} from "../models";
import {ComicsService} from "../comics.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit{

  comics: Comics;

  constructor(private route: ActivatedRoute,private comicsService: ComicsService) {
    this.comics = {} as Comics
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.comicsService.getComicsDetails(id).subscribe((comics) => {
          this.comics = comics;
        })
      }
    })
  }
}
