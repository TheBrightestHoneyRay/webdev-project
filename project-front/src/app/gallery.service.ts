import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gallery} from "./models";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private httpClient: HttpClient) { }

  getNewsGallery(id: number): Observable<Gallery[]>{
    return this.httpClient.get<Gallery[]>(`http://127.0.0.1:8000/api/news/${id}/gallery`)
  }

  getOneFromNewsGallery(newsId: number, picId: number): Observable<Gallery>{
    return this.httpClient.get<Gallery>(`http://127.0.0.1:8000/api/news/${newsId}/gallery/${picId}`)
  }

}
