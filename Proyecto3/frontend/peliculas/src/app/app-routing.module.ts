import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GenerosComponent } from './generos/generos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MesComponent } from './mes/mes.component';
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "generos", component: GenerosComponent},
  { path: "peliculas/genero/:id", component: PeliculasComponent},
  { path: "peliculas/opinion/:id", component: OpinionComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "mes", component: MesComponent},
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
