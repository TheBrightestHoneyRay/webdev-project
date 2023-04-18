import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {Comics} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private httpClient: HttpClient) { }

  getComics(): Observable<Comics[]>{
    return this.httpClient.get<Comics[]>('http://127.0.0.1:8000/api/comics/')
  }

  getComicsDetails(id: number): Observable<Comics>{
    return this.httpClient.get<Comics>(`http://127.0.0.1:8000/api/comics/${id}`)
  }

}
