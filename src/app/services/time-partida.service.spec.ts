import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TimePartida } from '../entities/time_partida';
import { TimePartidaService } from './time-partida.service';
import * as $ from 'jquery'

describe('TimePartidaService', () => {
  let httpTestingController:HttpTestingController
  let service: TimePartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TimePartidaService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(TimePartidaService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista de time_partidas", ()=>{
    const listaEsperada:TimePartida[]= [
      {id:1, resultado:true, idPartida: 1, idTime: 1},
      {id:2, resultado:false, idPartida: 1, idTime: 2},
      {id:3, resultado:true, idPartida: 2, idTime: 1}
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/timepartida/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo estádio, a partir do método 'POST'", ()=>{
    const time_partidaTeste:TimePartida = {resultado:true, idPartida: 3, idTime: 2}

    service.incluir(time_partidaTeste).subscribe(
      data=> expect(data).toEqual(time_partidaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/timepartida/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.resultado).toEqual(time_partidaTeste.resultado)
    expect(testRequest.request.body.idPartida).toEqual(time_partidaTeste.idPartida)
    expect(testRequest.request.body.idTime).toEqual(time_partidaTeste.idTime)
    console.log(testRequest.request.body)
    testRequest.flush(time_partidaTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const time_partidaTeste:TimePartida = {id:3, resultado:false, idPartida: 1, idTime: 1}
    service.alterar(time_partidaTeste).subscribe(
      data=> expect(data).toEqual(time_partidaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/timepartida/alterar')
    expect(testRequest.request.method).toBe('PUT')
        expect(testRequest.request.body.resultado).toEqual(time_partidaTeste.resultado)
    expect(testRequest.request.body.idPartida).toEqual(time_partidaTeste.idPartida)
    expect(testRequest.request.body.idTime).toEqual(time_partidaTeste.idTime)
    expect(testRequest.request.body.id).toEqual(time_partidaTeste.id)
    testRequest.flush(time_partidaTeste)
  })

  it("#carregarTimePartida deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const time_partidaTeste:TimePartida = {id:2, resultado:false, idPartida: 1, idTime: 2}
    service.carregarTimePartida(2).subscribe(
      data=>expect(data).toEqual(time_partidaTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/timepartida/${time_partidaTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(time_partidaTeste)
  })

});