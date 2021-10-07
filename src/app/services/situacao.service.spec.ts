import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Situacao } from '../entities/situacao';
import { SituacaoService } from './situacao.service';
import * as $ from 'jquery'
import { data } from 'jquery';

describe('SituacaoService', () => {
  let httpTestingController: HttpTestingController
  let service: SituacaoService;
  
  const url = "http://localhost:8080/situacao"

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SituacaoService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(SituacaoService);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it("#Listar - Deve retornar uma lista de Situacao", () =>{
    const listaSituacao:Situacao[] = [
      {id: 1, descricao: "Acertou"},
      {id: 2, descricao: "Errou"}
    ]
    service.listar().subscribe(
      data => {expect(data).toEqual(listaSituacao)}
    )
    const testRequest = httpTestingController.expectOne(url + '/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaSituacao)
  })

  it("#carregarEstadio deve fazer a requisição por um item específico, a partir do método GET", ()=>{
    const situcaoTest:Situacao = {id: 1, descricao: "Pendente"}
    
    service.carregarSituacao(1).subscribe(
      data=>{expect(data).toEqual(situcaoTest), console.log("carregar", data)}
      
    )
    const testRequest = httpTestingController.expectOne(url + "/"+ situcaoTest.id)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(situcaoTest)
  })

  it("#incluir - deve enviar um objeto do tipo Situacao", ()=>{
    const situcaoTest:Situacao = {id: 3, descricao: "Pendente"}

    service.incluir(situcaoTest).subscribe(
      data => expect(data).toEqual(situcaoTest)
    )
    const testrequest = httpTestingController.expectOne(url + '/incluir')
    expect(testrequest.request.method).toBe('POST')
    expect(testrequest.request.body.descricao).toEqual(situcaoTest.descricao)
    console.log(testrequest.request.body)
    testrequest.flush(situcaoTest)
  })

  it("#alterar - Deve alterar um objeto do tipo Situacao", () => {
    const situcaoTest:Situacao = {id: 1, descricao: "Pendente"}
    service.alterar(situcaoTest).subscribe(
      data => {expect(data).toEqual(situcaoTest), console.log("data: ", data)}
    )
    const testrequest = httpTestingController.expectOne(url + '/alterar')
    expect(testrequest.request.method).toBe('PUT')
    expect(testrequest.request.body.id).toEqual(situcaoTest.id)
    expect(testrequest.request.body.descricao).toEqual(situcaoTest.descricao)
    testrequest.flush(situcaoTest)
  })
});

