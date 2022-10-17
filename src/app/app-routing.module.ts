import { ListPokemonComponent } from './modules/list-pokemon/list-pokemon.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon/list-pokemon',
    component: ListPokemonComponent,
  },
  {
    path: '**',
    redirectTo: 'pokemon/list-pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
