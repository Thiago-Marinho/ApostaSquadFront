import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimePartida } from '../entities/time_partida';
import { TimePartidaService } from './time-partida.service';
import * as $ from 'jquery'

describe('TimePartidaService', () => {
  let service: TimePartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TimePartidaService]
    });
    service = TestBed.inject(TimePartidaService);
  });

  it('#listar deve retornar uma lista maior que zero', (done) => {
    $.ajax({
      url:'http://localhost:8080/timepartida/listar',
      dataType:'json',
      success: (data:TimePartida[], response:any)=>{
        expect(data.length).toBeGreaterThanOrEqual(0)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  });
  it('#incluir deve adicionar um objeto',done=>{
    const time_partida:TimePartida ={
      resultado:false,
      idPartida:1,
      idTime:1
    }

    let expected =0;
    $.ajax({
      url:'http://localhost:8080/timepartida/listar',
      dataType:'json',
      success: (data:TimePartida[], response:any)=>{
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/timepartida/incluir',
      data: JSON.stringify(time_partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/timepartida/listar',
          dataType:'json',
          success: (data:TimePartida[], response:any)=>{
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
    const time_partida:TimePartida ={      
      id: 3,
      resultado:true,
      idPartida:1,
      idTime:3}
    let expected =0;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/timepartida/alterar',
      data: JSON.stringify(time_partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/timepartida/listar',
          dataType:'json',
          success: (data:TimePartida[], response:any)=>{
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


  it('#carregarTimePartida deve retornar um objeto válido',(done)=>{
    $.ajax({
      url:'http://localhost:8080/timepartida/3',
      dataType:'json',
      success: (data:TimePartida, response:any)=>{
        expect(data==null).toEqual(false)
        done()
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })
  })
});
