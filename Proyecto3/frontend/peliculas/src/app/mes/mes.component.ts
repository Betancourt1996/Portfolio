import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';
@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})

export class MesComponent implements OnInit {

  constructor(private peliculaService:PeliculaService) { }
  peliculas: Array<any> = [];
  
  ngOnInit(): void {
    this.cargarPelicula();
  }
  cargarPelicula(){
    this.peliculaService.obtenerPeliculas(4).subscribe(data=>{
      
      this.peliculas=data as Array<any>;
    })
  }
  
}
