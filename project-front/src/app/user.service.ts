import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs';
import {AuthToken, User} from "./models";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBase = 'http://127.0.0.1:8000/api/'
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiBase}users`)
  }

  getUser(): Observable<User>{
    return this.httpClient.get<User>('http://127.0.0.1:8000/api/user/', {withCredentials: true})
  }
}
