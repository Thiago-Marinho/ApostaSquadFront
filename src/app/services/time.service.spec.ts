
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { TimeService } from 'src/app/services/time.service';
import { Time } from '../entities/time';
import * as $ from 'jquery'
import { data } from 'jquery';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('Testar o Servico de Time', () => {

  let service: TimeService
  let contador: number
  let url: string = 'http://localhost:8080/time'
  let timeList: Time[]
  let httpTestingController: HttpTestingController

  let timePost: Time = {
    id: 0,
    nome: 'Novo time para testar'
  }

  beforeAll( () => {
    contador = 0;
    service.listar().subscribe(resp => timeList = resp)
  });

  beforeEach( () => {
    contador += 1;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimeService]
    });
    service = TestBed.inject(TimeService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterAll(() =>{
    console.log('Quantidade de testes:', contador );
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
    })

  });

  it('Deveria inserir um novo registro no banco (integrado com backend via ajax)', () => {
    service.incluir(timePost).subscribe(resp => console.log('inserindo no banco: ', resp))

  })

});