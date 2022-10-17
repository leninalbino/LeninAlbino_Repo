import { Pokemon } from './../../../src/app/modules/models/pokemon';
import { PagesPokemonPipe } from './../../../src/app/modules/pipes/pages-pokemon.pipe';
import { PokemonService } from './../../../src/app/modules/services/list-pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListPokemonComponent } from './../../../src/app/modules/list-pokemon/list-pokemon.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;

  let compiled: HTMLElement; //porbar el Htlm
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonComponent,
                      PagesPokemonPipe ],

      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //llenamos los valores
    compiled = fixture.nativeElement;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('must match the snapshot',() =>{
    expect(compiled).toMatchSnapshot();
  });

  test('clicking the button should increment by 8', ()  =>{
    const buttons = compiled.querySelectorAll('button');
    buttons[1].click();
    expect(component.page).toBe(8)
  })

  test('must show the main title', ()  =>{
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Listado de Pokemon')
  });

  test('must load the pokemon', ()  =>{
    const dummyPokemons = [
      {
        id: '1',
        name:'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      }
    ]
    //httpMock, es un ojo o un observador de http que esta en el servicio
    //console.log(dummyPokemons);
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=1500');
    expect(request.request.method).toBe('GET');// probamos que el tipo de respuesta sea Get
    request.flush(dummyPokemons)// para ver si ese request regreso de tipo dumyPokemon

    fixture.detectChanges();//detectar los cambios
  })

});
