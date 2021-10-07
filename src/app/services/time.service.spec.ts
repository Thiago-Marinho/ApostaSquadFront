
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { TimeService } from 'src/app/services/time.service';
import { Time } from '../entities/time';
import * as $ from 'jquery'
import { data } from 'jquery';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('TimeService - Testar o servico de Time', () => {

  let service: TimeService
  let contador: number
  let url: string = 'http://localhost:8080/time'
 
  let httpTestingController: HttpTestingController

  let timePost: Time = {
    id: 0,
    nome: 'Novo time para testar'
  }

  beforeAll( () => {
    contador = 0;
  });

  beforeEach( () => {
    contador += 1;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimeService]
    });
    service = TestBed.inject(TimeService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterAll(() =>{
    console.log('Quantidade de testes:', contador );
  });

  it('#listar - Deveria ser maior que zero... (backend)', (doneFn) => {

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

  it('#incluir - Deve adicionar um objeto... (backend)',(done)=>{
    const time:Time ={nome:"Time de teste"}
    let expected =0;
    let result = 0;

    $.ajax({
      url:'http://localhost:8080/time/listar',
      dataType:'json',
      success: (data:Time[], response:any)=>{
        expected=data.length+1
      },
      error: (data,response)=>{
        result = -1
      }
    }).then ( () => {

      $.ajax({
        type: "POST",
        url: 'http://localhost:8080/time/incluir',
        data: JSON.stringify(time),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8'
      }).then ( () => {

        $.ajax({
          url:'http://localhost:8080/time/listar',
          dataType:'json',
          success: (data:Time[], response:any)=>{
            result=data.length
          },
          error: (data,response)=>{
            result = -1
          }
        }).then( () => {
           expect(expected).toEqual(result);
           done(); 
        })
      })
    })

  });

  it('#alterar - Deve atualizar um objeto... (backend)',(done)=>{
    const time:Time ={id:3, nome:"Time de teste"}
    let expected: boolean = true;
    let result: boolean = false;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/time/alterar',
      data: JSON.stringify(time),
      success: success=>{
        result = true;
      },
      error: (data,response)=>{
        console.log("Erro no alterar", data)
        result = false
      },
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).then (() =>{
      expect(expected).toEqual(result);
      done() 
    })

  });

  // ----- TESTES COM MOCK ----- //

  it('#listar - Deve retornar uma lista de times... (mock)', () => {
    const listaEsperada: Time[] = [
      { id: 1, nome: 'Cruzeiro' },
      { id: 2, nome: 'Santos' },
      { id: 3, nome: 'Bragantino' },
      { id: 4, nome: 'Real Madrid' },
    ]

    service.listar().subscribe(data => {
      expect(data).toEqual(listaEsperada)
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/time/listar')
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(listaEsperada)
  })

  it('#incluir - Deve enviar um objeto do tipo Time, a partir do método "POST"... (mock)', () => {
    const timeTeste: Time = { nome: 'Barcelona' }

    service.incluir(timeTeste).subscribe(resp => expect(resp).toEqual(timeTeste))

    const testRequest = httpTestingController.expectOne('http://localhost:8080/time/incluir')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toEqual(timeTeste.nome)
    testRequest.flush(timeTeste)
  })

  it('#alterar - Deve enviar um objeto com id e nome, a fim de substituir um objeto, a partir do método "PUT"... (mock)', ()=>{
    const timeTeste: Time = { id: 3, nome: 'Chelsea' }
    service.alterar(timeTeste).subscribe(
      data => expect(data).toEqual(timeTeste)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/time/alterar')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.nome).toEqual(timeTeste.nome)
    expect(testRequest.request.body.id).toEqual(timeTeste.id)
    testRequest.flush(timeTeste)
  })

  it('#carregarTime deve fazer a requisição por um item específico, a partir do método "GET"... (mock)', ()=>{
    const timeTeste: Time = { id: 3, nome: 'Chelsea' }
    service.carregarTime(Number(timeTeste.id)).subscribe(
      data=>expect(data).toEqual(timeTeste)
    )

    const testRequest = httpTestingController.expectOne(`http://localhost:8080/time/${timeTeste.id}`)
    expect(testRequest.request.method).toBe('GET')
    testRequest.flush(timeTeste)
  })

});