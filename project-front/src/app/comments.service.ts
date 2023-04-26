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

  postAnonymousComment(comicsId: number, body: string): Observable<Commentary>{
    return this.httpClient.post<Commentary>('http://127.0.0.1:8000/api/comments/', {body: body, comics: comicsId})
  }

  getDiscussionComments(id: number): Observable<Commentary[]>{
    return this.httpClient.get<Commentary[]>(`http://127.0.0.1:8000/api/discussions/${id}/comments`)
  }

  postAnonymousDisComment(disId: number, body: string): Observable<Commentary>{
    return this.httpClient.post<Commentary>(`http://127.0.0.1:8000/api/discussions/${disId}/newcomment`, {body: body, discussion: disId})
  }
  /* Create comment here */
  // Delete comment here
  // Edit comment here
}
