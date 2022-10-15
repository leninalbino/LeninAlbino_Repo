import { PokemonService } from './../services/pokemon.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  public form!: FormGroup


  constructor(
    private _pokemonService: PokemonService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getPokemon()
    this.formulario();

    //this.getImage()
  }

  objectKeys (objeto: any) {
    const values = Object.values(objeto);
    console.log(values); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return values;
 }
  getPokemon(){
    this._pokemonService.getPokemons().subscribe(pokedata => {
      //this.pokemons = this.objectKeys(pokedata)
      this.getImage(pokedata)
      //console.log(pokedata);

    })
  }

    get_List_Pokemon_Of_Object:any[]=[]
    new_List_pokemons:any[]=[]
    pokemons:Pokemon[]=[]
  getImage(object: any):Pokemon[] {
    this.get_List_Pokemon_Of_Object= Object.values(object.results);

    this.get_List_Pokemon_Of_Object.filter((data:any )=> {
      const url = data.url.split('/')
      const id = url[6]
      const image =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      this.pokemons =[
        {id: id,
        name: data.name,
        image: image
        }
      ]
      this.new_List_pokemons.push(this.pokemons)
      // console.log(this.pokemons)
      //console.log(this.new_List_pokemons);

    })
    return this.new_List_pokemons
  }
  formulario() {
    this.form = this.formBuilder.group({
      search:['']
    })
}
FindPokemon(){
  let search =  this.form.value.search.trim().toUpperCase()
  if(search.trim().length >=0){
   let pokemon:Pokemon[] = this.new_List_pokemons.filter(e =>e[0].id == search || e[0].name);
   //  e[0].id == search || e[0].name.toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase())
   console.log(pokemon);
  //  this.new_List_pokemons.push(pokemon)
  //  console.log(this.new_List_pokemons);


}
}
}



