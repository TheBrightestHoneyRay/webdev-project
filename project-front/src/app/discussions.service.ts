import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discussion} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DiscussionsService {
  constructor(private httpClient: HttpClient) { }

  getDiscussions(): Observable<Discussion[]>{
    return this.httpClient.get<Discussion[]>('http://127.0.0.1:8000/api/discussions/')
  }

  recentDiscussions(): Observable<Discussion[]>{
    return this.httpClient.get<Discussion[]>('http://127.0.0.1:8000/api/recent_discussions/')
  }

  getDiscussionDetails(id: number): Observable<Discussion>{
    return this.httpClient.get<Discussion>(`http://127.0.0.1:8000/api/discussions/${id}/`)
  }
}
