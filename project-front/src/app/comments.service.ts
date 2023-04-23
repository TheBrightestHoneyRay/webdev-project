import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commentary} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private httpClient: HttpClient) { }

  getComments(id: number): Observable<Commentary[]>{
    return this.httpClient.get<Commentary[]>(`http://127.0.0.1:8000/api/comics/${id}/comments`)
  }

  /* Create comment here */
  // Delete comment here
  // Edit comment here
}
