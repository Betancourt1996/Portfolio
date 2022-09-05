 -- drop database peliculas;
create database peliculas;
use peliculas;
CREATE TABLE IF NOT EXISTS `peliculas`.`pelicula` (
  `id_pelicula` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `fecha_estreno` DATE NOT NULL,
  `director` VARCHAR(45) NOT NULL,
  `elenco` VARCHAR(100) NOT NULL,
  
  `valoracion` FLOAT NOT NULL,
  `sinopsis` VARCHAR(200) NOT NULL,
  
  PRIMARY KEY (`id_pelicula`));
create table IF NOT exists genero (
id_genero INT NOT NULL AUTO_INCREMENT primary key,
nombre VARCHAR(45) NOT NULL
);  
create table IF NOT exists generos_pelicula (
id_generos_pelicula INT NOT NULL AUTO_INCREMENT primary key,
id_genero INT,
id_pelicula int ,
foreign key (id_pelicula) references pelicula(id_pelicula),
foreign key (id_genero) references genero(id_genero)
);


create table IF NOT exists usuario (
id_usuario INT NOT NULL AUTO_INCREMENT primary key,
usuario VARCHAR(15) NOT NULL ,
contra VARCHAR(15) NOT NULL 

);

create table IF NOT exists criticas (
id_critica INT NOT NULL AUTO_INCREMENT primary key,
id_peliculas int,
id_usuario int,
valoracion float,
foreign key (id_peliculas) references pelicula(id_pelicula),
foreign key (id_usuario) references usuario(id_usuario)
);