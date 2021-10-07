
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Aposta } from '../entities/aposta';
import { ApostaService } from './aposta.service';
import * as $ from 'jquery'

describe('ApostaService', () => {
  let service: ApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApostaService]
    });
    service = TestBed.inject(ApostaService);
  });

  it('#listar deve retornar uma lista maior que zero', (done) => {
    $.ajax({
      url:'http://localhost:8080/aposta/listar',
      dataType:'json',
      success: (data:Aposta[], response:any)=>{
        expect(data.length).toBeGreaterThanOrEqual(0)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  });
  it('#incluir deve adicionar um objeto',done=>{
    const aposta:Aposta ={valor:100, descricao:"teste", idCliente:1, idSituacao:1}
    let expected =0;
    $.ajax({
      url:'http://localhost:8080/aposta/listar',
      dataType:'json',
      success: (data:Aposta[], response:any)=>{
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/aposta/incluir',
      data: JSON.stringify(aposta),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/aposta/listar',
          dataType:'json',
          success: (data:Aposta[], response:any)=>{
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

  it('#alterar deve atualizar um objeto',done=>{
    
    $.ajax({
      url:'http://localhost:8080/aposta/listar',
      dataType:'json',
      success: (data:Aposta[], response:any)=>{
        const aposta:Aposta ={valor:100, descricao:"teste", idCliente:1, idSituacao:1}
        const indexSorteado = Math.floor((Math.random() * data.length));
        aposta.id=data[indexSorteado].id
        $.ajax({
          type: "PUT",
          url: 'http://localhost:8080/aposta/alterar',
          data: JSON.stringify(aposta),
          success: success=>{

            $.ajax({
              type:'GET',
              url:`http://localhost:8080/aposta/listar/${aposta.id}`,
              dataType:'json',
              success: (data:Aposta, response:any)=>{
                expect(data.descricao).toBe(aposta.descricao)
                done()
              },
              error: (data,response)=>{
                expect(true).toThrow("Erro ao realizar teste")
                done();
              }
            })

          },
          dataType: 'json',
          contentType: 'application/json; charset=utf-8'
        });

      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
        done();
      }
    })

    done()
  })


  it('#carregarAposta deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/aposta/listar',
      dataType:'json',
      success: (data:Aposta[], response:any)=>{
        const indexSorteado = Math.floor((Math.random() * data.length));
        $.ajax({
          url:`http://localhost:8080/aposta/listar/${indexSorteado}`,
          dataType:'json',
          success: (data:Aposta, response:any)=>{
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

