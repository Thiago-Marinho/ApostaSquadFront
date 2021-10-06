import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Cliente } from '../entities/cliente';
import { ClienteService } from './cliente.service';
import * as $ from 'jquery'

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ClienteService]
    });
    service = TestBed.inject(ClienteService);
  });

  it('#listar deve retornar uma lista maior que zero', (done) => {
    $.ajax({
      url:'http://localhost:8080/cliente/listar',
      dataType:'json',
      success: (data:Cliente[], response:any)=>{
        expect(data.length).toBeGreaterThanOrEqual(0)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  });
  it('#incluir deve adicionar um objeto',done=>{
    const cliente:Cliente ={nome:"Cliente de teste"}
    let expected =0;
    $.ajax({
      url:'http://localhost:8080/cliente/listar',
      dataType:'json',
      success: (data:Cliente[], response:any)=>{
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/cliente/incluir',
      data: JSON.stringify(cliente),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/cliente/listar',
          dataType:'json',
          success: (data:Cliente[], response:any)=>{
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
    const cliente:Cliente ={id:3, nome:"Cliente de teste"}
    let expected =0;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/cliente/alterar/3',
      data: JSON.stringify(cliente),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/cliente/listar',
          dataType:'json',
          success: (data:Cliente[], response:any)=>{
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


  it('#carregarCliente deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/cliente/3',
      dataType:'json',
      success: (data:Cliente, response:any)=>{
        expect(data==null).toEqual(false)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  })
});
