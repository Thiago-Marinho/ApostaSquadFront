import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Cliente } from '../entities/cliente';
import { ClienteService } from './cliente.service';
import * as $ from 'jquery'

describe('ClienteService', () => {
  let httpTestingController:HttpTestingController
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ClienteService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ClienteService);
  });

  afterEach(()=>{
    httpTestingController.verify()
  })
  it("#listar deve retornar uma lista de clientes", ()=>{
    const listaEsperada:Cliente[]= [
      {id:1, nome:"Marcus"},
      {id:2, nome:"Lucas"},
      {id:3, nome:"Thiago"},
    ]
    service.listar().subscribe(data=>{
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/cliente/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })
  
  it("#incluir deve mandar um objeto do tipo estádio, a partir do método 'POST'", ()=>{
    const clienteTeste:Cliente = {nome:"Misael"}

    service.incluir(clienteTeste).subscribe(
      data=> expect(data).toEqual(clienteTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/cliente/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toEqual(clienteTeste.nome)
    console.log(testRequest.request.body)
    testRequest.flush(clienteTeste)
  })

  it("#alterar deve mandar um objeto com id e corpo, a fim de substituir um objeto, a partir do método 'PUT'", ()=>{
    const clienteTeste:Cliente = {id:1, nome:"Marcus Rolim"}
    service.alterar(clienteTeste).subscribe(
      data=> expect(data).toEqual(clienteTeste)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/cliente/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.nome).toEqual(clienteTeste.nome)
    expect(testRequest.request.body.id).toEqual(clienteTeste.id)
    testRequest.flush(clienteTeste)
  })

  it("#carregarCliente deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const clienteTeste:Cliente = {id:1, nome:"Marcus Rolim"}
    service.carregarCliente(1).subscribe(
      data=>expect(data).toEqual(clienteTeste)
    )
    const testRequest = httpTestingController.expectOne(`http://localhost:8080/cliente/${clienteTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(clienteTeste)
  })

});