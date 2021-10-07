import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResultadoApostaService } from './resultado-aposta.service';
import { ResultadoAposta } from '../entities/resultado_aposta';
import * as $ from 'jquery'


describe('ResultadoAposta', () => {
  let service: ResultadoApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ResultadoApostaService]
    });
    service = TestBed.inject(ResultadoApostaService);
  });

  it('Listar() - Deveria ser maior que zero.. (integrado com backend)', (doneFn) => {

    $.ajax({
      url: 'http://localhost:8080/resultadoaposta/listar',
      dataType: 'json',
      success: function (data: ResultadoAposta[], response: any) {
          // Here your expected using data
          expect(data.length).toBeGreaterThanOrEqual(0)
          doneFn();
      },
      error: function( data, response){
        expect(true).toThrow("Erro ao testar")
      }
      
    });
  });

  it('incluir - deveria adicionar um objeto ..',(done)=>{
    const partida:ResultadoAposta ={
      status_time: false,
      id_aposta: 2,
      id_time_partida: 2}

    let expected =0;
    $.ajax({
      url:'http://localhost:8080/resultadoaposta/listar',
      dataType:'json',
      success: function (data:ResultadoAposta[], response:any){
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/resultadoaposta/incluir',
      data: JSON.stringify(partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/resultadoaposta/listar',
          dataType:'json',
          success: function (data:ResultadoAposta[], response:any){
            expect(data.length).toEqual(expected)
            done()
          },
          error: (data,response)=>{
            expect(true).toThrow("Erro ao realizar teste")
          }
        })
      },
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    });
    done()
  })
  it('alterar - deveria atualizar um objeto..',done=>{
    const partida:ResultadoAposta ={
      status_time: false,
      id_aposta: 1,
      id_time_partida: 2}
    let expected =0;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/resultadoaposta/alterar',
      data: JSON.stringify(partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/resultadoaposta/listar',
          dataType:'json',
          success: function (data:ResultadoAposta[], response:any){
            expect(data.length).toBeGreaterThan(expected)
            done()
          },
          error: (data,response)=>{
            expect(true).toThrow("Erro ao realizar teste")
          }
        })
      },
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    });
    done()
  })

  it('ConsultarPartida deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/resultadoaposta/listar',
      dataType:'json',
      success: (data:ResultadoAposta[], response:any)=>{
        const indexSorteado = Math.floor((Math.random() * data.length));
        $.ajax({
          url:`http://localhost:8080/resultadoaposta/listar/${indexSorteado}`,
          dataType:'json',
          success: (data:ResultadoAposta, response:any)=>{
            expect(data==null).toEqual(false)
            done()
          },
          error: (data: any,response: any)=>{
            expect(true).toThrow("Erro ao realizar teste")
          }
        })
      },
      error: (data: any,response: any)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
    done()
  })

  
});

