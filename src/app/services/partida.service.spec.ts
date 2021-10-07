import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Partida } from '../entities/partida';
import { PartidaService } from './partida.service';
import * as $ from 'jquery'

describe('PartidaService', () => {
  let httpTestingController:HttpTestingController
  let service: PartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PartidaService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PartidaService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista de partidas", ()=>{
    const listaEsperada:Partida[]= [
      {id:1, descricao:"Corinthians x Palmeiras", data:"2021-03-09 12:08:55", id_estadio:1},
      {id:2, descricao:"Flamengo x Palmeiras", data:"2021-03-19 16:58:55", id_estadio:2},
      {id:3, descricao:"Santos x São Paulo", data:"2021-03-29 15:58:55", id_estadio:3},
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/partida/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo partida, a partir do método 'POST'", ()=>{
    const partidaTeste:Partida = {descricao:"Corinthians x Palmeiras", data:"2021-03-09 12:08:55", id_estadio:1}

    service.incluir(partidaTeste).subscribe(
      data=> expect(data).toEqual(partidaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/partida/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.descricao).toEqual(partidaTeste.descricao)
    console.log(testRequest.request.body)
    testRequest.flush(partidaTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const partidaTeste:Partida = {id:1, descricao:"Corinthians x Palmeiras", data:"2021-03-09 12:08:55", id_estadio:1}
    service.alterar(partidaTeste).subscribe(
      data=> expect(data).toEqual(partidaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/partida/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.descricao).toEqual(partidaTeste.descricao)
    expect(testRequest.request.body.id).toEqual(partidaTeste.id)
    testRequest.flush(partidaTeste)
  })

  it("#carregarPartida deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const partidaTeste:Partida = {id:1, descricao:"Corinthians x Palmeiras", data:"2021-03-09 12:08:55", id_estadio:1}
    service.carregarPartida(1).subscribe(
      data=>expect(data).toEqual(partidaTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/partida/listar/${partidaTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(partidaTeste)
  })

});