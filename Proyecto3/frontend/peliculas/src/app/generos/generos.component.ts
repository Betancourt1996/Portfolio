import { Component, OnInit } from '@angular/core';
import { Genero } from '../interfaz/genero';
import { GeneroService } from '../servicios/genero.service';
export interface genero {
  nombre: string;
  url: string;
}
@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(private generoService: GeneroService) { }
  listaGeneros: Genero[] = [];
  ngOnInit(): void {
    this.cargarGeneros();
  }
  cargarGeneros(){
    this.generoService.obtenerGeneros().subscribe(data=>{
      
      this.listaGeneros=data as Genero[];
    })
  }

}
