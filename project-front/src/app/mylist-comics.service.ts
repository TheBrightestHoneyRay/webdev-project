import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyComics} from "./models";

@Injectable({
  providedIn: 'root'
})
export class MylistComicsService {
  constructor(private httpClient: HttpClient) { }

  getMyComics(userId: number): Observable<MyComics[]>{
    return this.httpClient.get<MyComics[]>(`http://127.0.0.1:8000/api/${userId}/mylist/`)
  }

}
