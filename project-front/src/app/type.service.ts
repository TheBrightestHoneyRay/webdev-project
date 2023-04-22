import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tyep} from "./models";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private httpClient: HttpClient) { }

  getTypes(): Observable<Tyep[]>{
    return this.httpClient.get<Tyep[]>('http://127.0.0.1:8000/api/types/')
  }

  getTypeDetails(id: number): Observable<Tyep>{
    return this.httpClient.get<Tyep>(`http://127.0.0.1:8000/api/types/${id}/`)
  }
}
