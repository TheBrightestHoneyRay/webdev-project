import {Component, OnInit} from '@angular/core';
import {MyComics} from "../models";
import {MylistComicsService} from "../mylist-comics.service";
import {User} from "../models";

@Component({
  selector: 'app-mycomics-list',
  templateUrl: './mycomics-list.component.html',
  styleUrls: ['./mycomics-list.component.css']
})
export class MycomicsListComponent implements OnInit{

  myList: MyComics[]
  user: User

  constructor(private myListService: MylistComicsService) {
    this.myList = []
    this.user = {} as User
  }

  ngOnInit() {
    this.getMyList()

  }

  getMyList(){
    this.myListService.getMyComics(this.user.id).subscribe((list) =>{
      this.myList = list
    })
  }
}
