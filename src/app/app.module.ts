
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './modules/list-pokemon/list-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PagesPokemonPipe } from './modules/pipes/pages-pokemon.pipe';
import { ListPokemonModule } from './modules/list-pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
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
    ListPokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
