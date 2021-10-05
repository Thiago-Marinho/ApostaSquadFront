import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Aposta } from 'src/app/entities/aposta';
import { Cliente } from 'src/app/entities/cliente';
import { Partida } from 'src/app/entities/partida';
import { Situacao } from 'src/app/entities/situacao';
import { Time } from 'src/app/entities/time';
import { TimePartida } from 'src/app/entities/time_partida';
import { ApostaService } from 'src/app/services/aposta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PartidaService } from 'src/app/services/partida.service';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';
import {ResultadoAposta} from 'src/app/entities/resultado_aposta'
import { SituacaoService } from 'src/app/services/situacao.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-aposta',
  templateUrl: './aposta.component.html',
  styleUrls: ['./aposta.component.css']
})
export class ApostaComponent implements OnInit {


  boolPostForm: boolean = false
  quemganha: any
  boolshowTimes: boolean = false
  aposta: Aposta = {id: 0,descricao:"", idCliente:0, idSituacao:0, valor:0}
  apostas: Aposta[] = []
  situacoes: Situacao[]=[]
  clientes: Cliente[]=[]
  partidas: Partida[] = []
  times: Time[] = []
  timesPartidas: TimePartida[] = []
  idFinal:any=0
  indicesTimePartida: any[]=[]
  apostaResultado1: ResultadoAposta ={
    id:0,
    status_time: false,
    id_aposta: 0,
    id_time_partida: 0
  }
  
  partida: Partida = {
    id: 0,
    data: '',
    descricao: '',
    id_estadio: 0
  }

  @ViewChild('el')
  el!: ElementRef;
  timesFiltrados: Time[] = [];

  constructor(
    private apostaService: ApostaService, 
    private situacaoService: SituacaoService,
    private clienteService: ClienteService,
    private partidaService: PartidaService,
    private timeService: TimeService,
    private timePartidaService: TimePartidaService,
    private resultadoApostaService : ResultadoApostaService
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  showTimes() {
    this.boolshowTimes = true
  }

  hideTimes() {
    this.boolshowTimes = false
  }

  hidePostForm(){
    this.boolPostForm = false
  }
  onSubmit(){
    this.aposta.idCliente = Number(this.aposta.idCliente)
    this.aposta.idSituacao = Number(this.aposta.idSituacao)

    this.apostaService.incluir(this.aposta).subscribe((resp)=>{this.apostaService.listar().subscribe(resp => this.apostas = resp)})
    this.apostaResultado1.id_aposta=Number(this.apostas[this.apostas.length - 1].id);
    if(this.quemganha == 'false') {
      console.log("indice", this.indicesTimePartida[0]);
      this.apostaResultado1.id_time_partida= this.indicesTimePartida[0]
      this.apostaResultado1.status_time = false
    } else {
      this.apostaResultado1.id_time_partida = Number(this.quemganha)
      this.apostaResultado1.status_time = true
    }
    console.log(this.apostaResultado1);
    
    this.resultadoApostaService.incluir(this.apostaResultado1).subscribe((resp) => {this.hidePostForm(); this.listar(); console.log(resp)})
  }

  listar(): void
  {
    this.apostaService.listar().subscribe(resp => this.apostas = resp)
    this.situacaoService.listar().subscribe(resp => this.situacoes = resp)
    this.clienteService.listar().subscribe(resp => this.clientes = resp)
    this.partidaService.listar().subscribe(resp => {this.partidas = resp; this.validar()})
    this.timeService.listar().subscribe(resp => this.times  = resp)
    this.timePartidaService.listar().subscribe(resp => this.timesPartidas = resp) 
  }

  validar(): void {
    this.timesFiltrados=[]
    this.indicesTimePartida=[]
    console.log(this.partida.id)
    if(this.partida.id != 0) {
      this.timesPartidas.forEach(element => {
        
        if(element.idPartida == this.partida.id) {
          console.log(element.idPartida)
          this.indicesTimePartida.push(element.id)
          this.timeService.carregarTime(element.idTime).subscribe(resp => this.timesFiltrados.push(resp))
        }
      }  
      )
      this.showTimes()
    }

  }

  

}
