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

  test('must show pokemon', (done) => {
    service.getPokemons().subscribe(Pokemon => {
      // console.log(listPokemon);

      expect(Pokemon).toBe(Pokemon)!;
      done();
    })

   });

});
