import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Estadio } from '../entities/estadio';
import { EstadioService } from './estadio.service';
import * as $ from 'jquery'

describe('EstadioService', () => {
  let service: EstadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EstadioService]
    });
    service = TestBed.inject(EstadioService);
  });

  it('#listar deve retornar uma lista maior que zero', (done) => {
    $.ajax({
      url:'http://localhost:8080/estadio/listar',
      dataType:'json',
      success: (data:Estadio[], response:any)=>{
        expect(data.length).toBeGreaterThanOrEqual(0)
        done()
      },
      error: (data: any,response: any)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  });
  it('#incluir deve adicionar um objeto',done=>{
    const estadio:Estadio ={descricao:"testeFrontEstadio"}
    let expected =0;
    $.ajax({
      url:'http://localhost:8080/estadio/listar',
      dataType:'json',
      success: (data:Estadio[], response:any)=>{
        expected=data.length
      },
      error: (data: any,response: any)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/estadio/incluir',
      data: JSON.stringify(estadio),
      success: (success: any)=>{
        $.ajax({
          url:'http://localhost:8080/estadio/listar',
          dataType:'json',
          success: (data:Estadio[], response:any)=>{
            expect(data.length).toBeGreaterThan(expected)
            done()
          },
          error: (data: any,response: any)=>{
            expect(true).toThrow("Erro ao realizar teste")
          }
        })
      },
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    });
    done()
  })
  it('#carregarEstadio deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/estadio/listar/1',
      dataType:'json',
      success: (data:Estadio, response:any)=>{
        expect(data==null).toEqual(false)
        done()
      },
      error: (data: any,response: any)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  })
  
  it('#alterar deve atualizar um objeto',done=>{
    
    $.ajax({
      url:'http://localhost:8080/estadio/listar',
      dataType:'json',
      success: (data:Estadio[], response:any)=>{
        const estadio:Estadio ={descricao:"teste"}
        const indexSorteado = Math.floor((Math.random() * data.length));
        estadio.id=data[indexSorteado].id
        $.ajax({
          type: "PUT",
          url: 'http://localhost:8080/estadio/alterar',
          data: JSON.stringify(estadio),
          success: success=>{

            $.ajax({
              type:'GET',
              url:`http://localhost:8080/estadio/listar/${estadio.id}`,
              dataType:'json',
              success: (data:Estadio, response:any)=>{
                expect(data.descricao).toBe(estadio.descricao)
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
});
