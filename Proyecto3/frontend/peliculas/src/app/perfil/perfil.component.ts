import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';
import { OpinionService } from '../servicios/opinion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  constructor(private peliculaService:PeliculaService,private opinionService:OpinionService,private rutaActiva: ActivatedRoute) { }
  peliculas: Array<any> = [];
  opiniones: Array<any> = [];
  rndInt = Math.floor(Math.random() * 6) + 1
  ngOnInit(): void {
    this.cargarPeliculas();
    
  }
  cargarPeliculas(){
    
      
        this.peliculaService.obtenerUnaPeliculas().subscribe(data=>{
          console.log(data)
          this.peliculas = data as Array<any>;
          
        }); }        
}
