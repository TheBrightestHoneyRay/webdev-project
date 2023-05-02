import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "./models";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<News[]>{
    return this.httpClient.get<News[]>('http://127.0.0.1:8000/api/news/')
  }

  getNewsDetails(id: number): Observable<News>{
    return this.httpClient.get<News>(`http://127.0.0.1:8000/api/news/${id}/`)
  }
}
