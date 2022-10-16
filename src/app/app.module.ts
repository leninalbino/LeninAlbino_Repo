
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPokemonComponent } from './modules/details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './modules/list-pokemon/list-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PagesPokemonPipe } from './modules/pipes/pages-pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PagesPokemonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, // importaciones de material
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
