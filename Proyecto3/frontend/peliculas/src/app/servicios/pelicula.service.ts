import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  domain:string ='http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }
  obtenerPeliculas(id:number) {
    return this.http.get(this.domain+"/api/peliculas/genero/"+id)
  }
  filtrarPeliculas(id:number) {
    return this.http.get(this.domain+"/api/peliculas/opinion/"+id)
  }
  obtenerUnaPeliculas() {
    return this.http.get(this.domain+"/api/peliculas/random")
  }
}
