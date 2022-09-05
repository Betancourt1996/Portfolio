import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  domain:string ='http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }
  obtenerOpinion() {
    return this.http.get(this.domain+"api/opinions/")
  }
}
