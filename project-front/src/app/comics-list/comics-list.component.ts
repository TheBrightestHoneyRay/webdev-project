import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";
import {Comics, MyComics, User} from "../models";
import {ActivatedRoute} from "@angular/router";
import {TypeService} from "../type.service";
import {LoggedService} from "../logged.service";
import {MylistComicsService} from "../mylist-comics.service";

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

  constructor(private comicsService: ComicsService, private myList: MylistComicsService,
              private typeService: TypeService,
              private route: ActivatedRoute, private logService: LoggedService) {
    this.comics = []
    this.categoryId = NaN
    this.isLogged = this.logService.isLogged
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

  addToList(comics: Comics){
    if(this.isLogged){
      this.myList.addComics(comics, this.loggedUser.id).subscribe((mycomics) => {
        this.loggedUser.my_list.push(mycomics)
      })
    }
    else{
      alert('You are not logged!')
    }
  }
}
