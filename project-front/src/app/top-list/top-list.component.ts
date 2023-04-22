import {Component, OnInit} from '@angular/core';
import {Comics, Tyep} from "../models";
import {ComicsService} from "../comics.service";
import {TypeService} from "../type.service";

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit{

  types: Tyep[]
  typeComics: Comics[]
  ongoingComics: Comics[]
  topLists: any[]

  constructor(private comicsService: ComicsService, private typeService: TypeService) {
    this.types = [];
    this.typeComics = [];
    this.ongoingComics = [];
    this.topLists = [];
  }
  ngOnInit(): void{
    this.typeService.getTypes().subscribe((types) =>{
      this.types = types
    })

    for(let t of this.types){
      this.getTypeThree(t.id)
      t.comics = this.typeComics
    }
    this.getOngoingThree()
  }

  getTypeThree(type_id: number){
    this.comicsService.getTypeThree(type_id).subscribe((comics) =>{
      this.typeComics = comics
    })
  }

  getOngoingThree(){
    this.comicsService.getTopOngoing().subscribe((comics) =>{
      this.ongoingComics = comics
    })
  }

}
