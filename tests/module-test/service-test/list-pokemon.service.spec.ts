import { Pokemon } from './../../../src/app/modules/models/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './../../../src/app/modules/services/list-pokemon.service';
import { TestBed } from '@angular/core/testing';

describe('ListPokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //importamos el httpclientmodule
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('you must bring the pokemon', (done) => {
    service.getPokemons().subscribe(listPokemon => {
      // console.log(listPokemon);

      expect(listPokemon).toBe(listPokemon)!;
      done();
    })

   });

});
