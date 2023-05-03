import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./models";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  isLogged =  false
  loggedUser = {} as User
  constructor(private httpClient: HttpClient) {
  }

  loginUser(username: string, password: string): Observable<User>{
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/login/', {user_name: username, password: password},
      {withCredentials: true})
  }

  signupUser(username: string, email: string, password: string): Observable<User>{
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/signup/',
      {user_name: username, email: email, password: password})
  }

}
