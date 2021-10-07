import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Aposta } from '../entities/aposta';
import { ApostaService } from './aposta.service';
import * as $ from 'jquery'

describe('ApostaService', () => {
  let httpTestingController:HttpTestingController
  let service: ApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApostaService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ApostaService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista de apostas", ()=>{
    const listaEsperada:Aposta[]= [
      {id:1, descricao:"Boa aposta", idCliente:1, idSituacao:1, valor:100},
      {id:1, descricao:"Má aposta", idCliente:1, idSituacao:1, valor:100},
      {id:1, descricao:"Média aposta", idCliente:1, idSituacao:1, valor:100},
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/aposta/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo estádio, a partir do método 'POST'", ()=>{
    const apostaTeste:Aposta = {descricao:"Boa aposta", idCliente:1, idSituacao:1, valor:100}

    service.incluir(apostaTeste).subscribe(
      data=> expect(data).toEqual(apostaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/aposta/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.descricao).toEqual(apostaTeste.descricao)
    console.log(testRequest.request.body)
    testRequest.flush(apostaTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const apostaTeste:Aposta = {id:1, descricao:"Boa aposta", idCliente:1, idSituacao:1, valor:100}
    service.alterar(apostaTeste).subscribe(
      data=> expect(data).toEqual(apostaTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/aposta/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.descricao).toEqual(apostaTeste.descricao)
    expect(testRequest.request.body.id).toEqual(apostaTeste.id)
    testRequest.flush(apostaTeste)
  })

  it("#carregarAposta deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const apostaTeste:Aposta = {id:1, descricao:"Boa aposta", idCliente:1, idSituacao:1, valor:100}
    service.carregarAposta(1).subscribe(
      data=>expect(data).toEqual(apostaTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/aposta/${apostaTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(apostaTeste)
  })

});