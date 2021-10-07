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
    testRequest.flush(listaEsperada)
    
  })
});