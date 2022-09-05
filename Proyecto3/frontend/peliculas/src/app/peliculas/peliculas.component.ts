import { Component, OnInit } from '@angular/core';
export interface pelicula {
  titulo: string;
  foto: string;
  sinopsis: string;
  rating: number;
}
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  peliculas: pelicula[] = [
  {
    "titulo": "Thor: Love and Thunder",
    "foto": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-love-and-thunder-poster-2-fotogramas-1653469014.jpeg?crop=1.00xw:0.339xh;0,0.106xh&resize=1200:*",
    "sinopsis": "Secuela de 'Thor: Ragnarok' en la que el Dios del Trueno contará con Lady Thor como acompañante.",
    "rating": 3
  },
  {
    "titulo": "Thor: Love and Thunder",
    "foto": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-love-and-thunder-poster-2-fotogramas-1653469014.jpeg?crop=1.00xw:0.339xh;0,0.106xh&resize=1200:*",
    "sinopsis": "Secuela de 'Thor: Ragnarok' en la que el Dios del Trueno contará con Lady Thor como acompañante.",
    "rating": 3
  },  {
    "titulo": "Thor: Love and Thunder",
    "foto": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-love-and-thunder-poster-2-fotogramas-1653469014.jpeg?crop=1.00xw:0.339xh;0,0.106xh&resize=1200:*",
    "sinopsis": "Secuela de 'Thor: Ragnarok' en la que el Dios del Trueno contará con Lady Thor como acompañante.",
    "rating": 3
  },
]
}
