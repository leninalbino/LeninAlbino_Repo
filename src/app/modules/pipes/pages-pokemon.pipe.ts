import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'pagesPokemon'
})
export class PagesPokemonPipe implements PipeTransform {

  transform(pokemons: Pokemon[],page: number=0): any[] {
    return pokemons.slice(page, page+8);
  }

}
