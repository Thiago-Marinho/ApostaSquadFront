import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Estadio } from '../entities/estadio';
import { EstadioService } from './estadio.service';
import * as $ from 'jquery'

describe('EstadioService', () => {
  let httpTestingController:HttpTestingController
  let service: EstadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EstadioService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(EstadioService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista de estadios", ()=>{
    const listaEsperada:Estadio[]= [
      {id:1, descricao:"Maracanã"},
      {id:2, descricao:"Itaipuva"},
      {id:3, descricao:"Ladrina"},
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/estadio/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo estádio, a partir do método 'POST'", ()=>{
    const estadioTeste:Estadio = {descricao:"Pernanbucano"}

    service.incluir(estadioTeste).subscribe(
      data=> expect(data).toEqual(estadioTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/estadio/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.descricao).toEqual(estadioTeste.descricao)
    console.log(testRequest.request.body)
    testRequest.flush(estadioTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const estadioTeste:Estadio = {id:1, descricao:"Pernanbucano"}
    service.alterar(estadioTeste).subscribe(
      data=> expect(data).toEqual(estadioTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/estadio/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.descricao).toEqual(estadioTeste.descricao)
    expect(testRequest.request.body.id).toEqual(estadioTeste.id)
    testRequest.flush(estadioTeste)
  })

  it("#carregarEstadio deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const estadioTeste:Estadio = {id:1, descricao:"Pernanbucano"}
    service.carregarEstadio(1).subscribe(
      data=>expect(data).toEqual(estadioTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/estadio/listar/${estadioTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(estadioTeste)
  })

});