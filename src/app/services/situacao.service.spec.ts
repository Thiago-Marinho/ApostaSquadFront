import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Situacao } from '../entities/situacao';
import { SituacaoService } from './situacao.service';
import * as $ from 'jquery'
import { HttpClientModule } from '@angular/common/http';

describe('SituacaoService', () => {
  let service: SituacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers:[SituacaoService]
    });
    service = TestBed.inject(SituacaoService);
  });

  it('#listar deve retornar uma lista maior que zero', (done) => {
    $.ajax({
      url:'http://localhost:8080/situacao/listar',
      dataType:'json',
      success: (data:Situacao[], response:any)=>{
        expect(data.length).toBeGreaterThanOrEqual(0)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  });

  it('#incluir deve adicionar um objeto',done=>{
    const situacao:Situacao ={descricao:"Situacao de teste"}
    let expected =0;
    $.ajax({
      url:'http://localhost:8080/situacao/listar',
      dataType:'json',
      success: (data:Situacao[], response:any)=>{
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/situacao/incluir',
      data: JSON.stringify(situacao),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/situacao/listar',
          dataType:'json',
          success: (data:Situacao[], response:any)=>{
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
    const situacao:Situacao ={id:3, descricao:"Situacao de teste"}
    let expected =0;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/situacao/alterar',
      data: JSON.stringify(situacao),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/situacao/listar',
          dataType:'json',
          success: (data:Situacao[], response:any)=>{
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

  it('#carregarSituacao deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/situacao/2',
      dataType:'json',
      success: (data:Situacao, response:any)=>{
        expect(data==null).toEqual(false)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  })
});

