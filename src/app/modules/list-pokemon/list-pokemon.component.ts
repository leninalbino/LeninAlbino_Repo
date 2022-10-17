import { PokemonService } from '../services/list-pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  view: boolean = false;

  public page: number = 0;
  detailPokemon:any={};

  get_List_Pokemon_Of_Object: any[] = [];
  new_List_pokemons: any[] = [];
  pokemons: Pokemon[] = [];
  last_list_pokemons: any[] = [];

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  objectKeys(objeto: any) {
    const values = Object.values(objeto);
    console.log(values); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return values;
  }
  getPokemon() {
    this._pokemonService.getPokemons().subscribe(pokedata => {
      //Todo
      console.log(pokedata);
      this.getImage(pokedata);
    })
  }

  getImage(object: any): Pokemon[] {
    this.get_List_Pokemon_Of_Object = Object.values(object.results);
    this.get_List_Pokemon_Of_Object.filter((data: any) => {
      const url = data.url.split('/');
      const id = url[6];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      this.pokemons = [
        {
          id: id,
          name: data.name,
          image: image
        }
      ]

      this.new_List_pokemons.push(this.pokemons);
      this.last_list_pokemons = this.new_List_pokemons;
      // console.log(this.last_list_pokemons);

    })
    return this.new_List_pokemons;
  }


  getOneById(id:number){
    this._pokemonService.getOneById(id).subscribe(dataDetail=>{
      this.viewDetalle();
      this.detailPokemon = dataDetail;
      console.log(this.detailPokemon);
    })
  }

  searchPokemon(value:any) {
    console.log();

    let search = value.trim().toUpperCase()
    if (value.trim().length >= 1) {
      let pokemon = this.new_List_pokemons.filter(e => e[0].id == value || e[0].name.toUpperCase()
                                                                                      .toLowerCase()
                                                                                      .includes(value.toUpperCase().toLowerCase()));
      this.last_list_pokemons = pokemon;
    } else {
      this.last_list_pokemons = this.new_List_pokemons;
    }
  }


  nextPage() {
    this.page += 8;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 8;
  }
  viewDetalle() {

    this.view = true;
  }

}



