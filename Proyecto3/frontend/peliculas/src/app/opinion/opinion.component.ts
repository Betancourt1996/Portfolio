import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';
import { OpinionService } from '../servicios/opinion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
export interface pelicula {
  titulo: string;
  foto: string;
  sinopsis: string;
  rating: number;
}
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  constructor(private peliculaService:PeliculaService,private opinionService:OpinionService,private rutaActiva: ActivatedRoute) { }
  peliculas: Array<any> = [];
  opiniones: Array<any> = [];
  ngOnInit(): void {
    this.cargarPeliculas();
    this.cargarOpionion();
  }
  cargarPeliculas(){
    this.rutaActiva.params.subscribe(
      (params: Params)=>{
        this.peliculaService.filtrarPeliculas(params['id']).subscribe(data=>{
          
          this.peliculas = data as Array<any>;
          
        });
        
      }
)
  }
  cargarOpionion(){
    this.opinionService.obtenerOpinion().subscribe(data=>{
      console.log(data)
      this.opiniones=data as Array<any>;
    })
  }
}





