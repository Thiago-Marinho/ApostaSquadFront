import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PartidaService } from './partida.service';
import { Partida } from '../entities/partida';
import * as $ from 'jquery'


describe('PartidaService', () => {
  let service: PartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PartidaService]
    });
    service = TestBed.inject(PartidaService);
  });

  it('Listar() - Deveria ser maior que zero.. (integrado com backend)', (doneFn) => {

    $.ajax({
      url: 'http://localhost:8080/partida/listar',
      dataType: 'json',
      success: function (data: Partida[], response: any) {
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
    const partida:Partida ={
      data:"15/05/2001",
      descricao:"testeFrontPartida",
      id_estadio: 1}

    let expected =0;
    $.ajax({
      url:'http://localhost:8080/partida/listar',
      dataType:'json',
      success: function (data:Partida[], response:any){
        expected=data.length
      },
      error: (data,response)=>{
        expect(true).toThrow("Erro ao realizar teste")
      }
    })

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/partida/incluir',
      data: JSON.stringify(partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/partida/listar',
          dataType:'json',
          success: function (data:Partida[], response:any){
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
    const partida:Partida ={
      id: 2,
      data:"20/10/2001",
      descricao:"testeFrontPartida",
      id_estadio: 2}
    let expected =0;

    $.ajax({
      type: "PUT",
      url: 'http://localhost:8080/partida/alterar',
      data: JSON.stringify(partida),
      success: success=>{
        $.ajax({
          url:'http://localhost:8080/partida/listar',
          dataType:'json',
          success: function (data:Partida[], response:any){
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
      url:'http://localhost:8080/partida/listar',
      dataType:'json',
      success: (data:Partida[], response:any)=>{
        const indexSorteado = Math.floor((Math.random() * data.length));
        $.ajax({
          url:`http://localhost:8080/partida/listar/${indexSorteado}`,
          dataType:'json',
          success: (data:Partida, response:any)=>{
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
