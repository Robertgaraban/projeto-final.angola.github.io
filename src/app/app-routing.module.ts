import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from "./components/home/home.component";
import { BusquedaComponent} from "./components/busqueda/busqueda.component";


const routes: Routes = [

  
  { path: "Home", component: HomeComponent },
  { path: "Busqueda", component: BusquedaComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'Home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
