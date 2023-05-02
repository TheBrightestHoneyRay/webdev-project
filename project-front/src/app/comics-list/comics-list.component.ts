import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";
import {Comics, User} from "../models";
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
  isLogged: boolean;
  loggedUser: User;

  constructor(private comicsService: ComicsService, private typeService: TypeService, private route: ActivatedRoute) {
    this.comics = []
    this.categoryId = NaN
    this.isLogged = false
    this.loggedUser = {} as User
  }

  ngOnInit(): void{
    this.getCategoryId()
    this.getTypeComics(this.categoryId)
  }

  getCategoryId(){
    this.route.params.subscribe((params)=>{
      this.categoryId = params['id']
    })
  }

  getTypeComics(categoryId: number){
    this.typeService.getTypeDetails(categoryId).subscribe((category) =>{
      this.comics = category.comics
    })
  }

  addToList(comicsId: number){
    if(this.isLogged){}
    else{
      alert('You are not logged!')
    }
  }
}
