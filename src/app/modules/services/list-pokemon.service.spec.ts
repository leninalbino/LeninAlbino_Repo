import { TestBed } from '@angular/core/testing';

import { ListPokemonService } from './pokemon.service';

describe('ListPokemonService', () => {
  let service: ListPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
