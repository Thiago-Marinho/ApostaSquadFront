import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ResultadoApostaService } from './resultado-aposta.service';
import { ResultadoAposta } from '../entities/resultado_aposta';
import * as $ from 'jquery'

describe('ResultadoApostaService - Teste', () => {
  let httpTestingController:HttpTestingController
  let service: ResultadoApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ResultadoApostaService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ResultadoApostaService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista dos resultados das aposta", ()=>{
    const listaEsperada:ResultadoAposta[]= [
      {id:1, status_time: true,id_aposta:1,id_time_partida:2},
      {id:2, status_time: false,id_aposta:2,id_time_partida:3},
      {id:3, status_time: true,id_aposta:3,id_time_partida:1},
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/resultadoaposta/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo resultadoAposta, a partir do método 'POST'", ()=>{
    const resultadoApostaTeste:ResultadoAposta = {status_time: true,id_aposta:1,id_time_partida:1}

    service.incluir(resultadoApostaTeste).subscribe(
      data=> expect(data).toEqual(resultadoApostaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/resultadoaposta/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.id).toEqual(resultadoApostaTeste.id)
    console.log(testRequest.request.body)
    testRequest.flush(resultadoApostaTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const resultadoApostaTeste:ResultadoAposta = {id:1,status_time: false,id_aposta:1,id_time_partida:1}
    service.alterar(resultadoApostaTeste).subscribe(
      data=> expect(data).toEqual(resultadoApostaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/resultadoaposta/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.status_time).toEqual(resultadoApostaTeste.status_time)
    expect(testRequest.request.body.id_aposta).toEqual(resultadoApostaTeste.id_aposta)
    expect(testRequest.request.body.id_time_partida).toEqual(resultadoApostaTeste.id_time_partida)
    expect(testRequest.request.body.id).toEqual(resultadoApostaTeste.id)
    testRequest.flush(resultadoApostaTeste)
  })

  it("#carregarResultadoAposta deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const resultadoApostaTeste:ResultadoAposta = {id:1, status_time: false,id_aposta:1, id_time_partida:1}
    service.carregarResultadoAposta(1).subscribe(
      data=>expect(data).toEqual(resultadoApostaTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/resultadoaposta/${resultadoApostaTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(resultadoApostaTeste)
  })
});