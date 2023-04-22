import {Component, OnInit} from '@angular/core';
import {Tyep} from "../models";
import {TypeService} from "../type.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories: Tyep[]

  constructor(private typeService: TypeService) {
    this.categories = []
  }

  ngOnInit() {
    this.typeService.getTypes().subscribe((types)=>{
      this.categories = types
    })
  }

}
