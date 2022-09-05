import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GenerosComponent } from './generos/generos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PerfilComponent } from './perfil/perfil.component';
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "generos", component: GenerosComponent},
  { path: "peliculas", component: PeliculasComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
