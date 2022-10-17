import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DetailPokemon, Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.HOST+"pokemon"
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }


  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${baseUrl}/?limit=1500`)
  }

  getOneById(id:number):Observable<DetailPokemon>{
    return this.http.get<DetailPokemon>(`${baseUrl}/${id}`)
  }

  // private transformDetailPokemon()

}
