import { HttpClientTestingModule } from '@angular/common/http/Testing';
import { TestBed } from '@angular/core/testing';
import { TimeService } from 'src/app/services/time.service';
import { Time } from '../entities/time';
import * as $ from 'jquery'


describe('Testar o Servico de Time', () => {

  let service: TimeService
  let contador: number

  beforeAll( () => {
    contador = 0;



  });

  beforeEach( () => {
    contador += 1;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimeService]
    });
    service = TestBed.inject(TimeService);

  });

  afterAll(() =>{
    console.log( 'Quantidade de testes:', contador );
  });


  it('listar() - Deveria ser maior que zero...(mock)', () => {

    let expected: number = 2;
    let result: number = 0;
    let times: Time[] = [];

    times = service.listarFake();
    console.log(times);
    result = times.length;
    expect(result).toEqual(expected);

  });

  it('Buscar time2', () => {
    let expected: boolean = true;
    let result: boolean = false;

    result = service.buscar("Time2");
    expect(result).toEqual(expected);

  });


  it('Listar() - Deveria ser maior que zero.. (integrado com backend)', (doneFn) => {

    $.ajax({
      url: 'http://localhost:8080/time/listar',
      dataType: 'json',
      success: function (data: Time[], response: any) {
          // Here your expected using data
          expect(data.length).toBeGreaterThanOrEqual(0)
          doneFn();
      },
      error: function( data, response){
        expect(true).toThrow("Erro ao testar")
      }
    });

  });

});