import { Component, OnInit } from '@angular/core';
import { Aposta } from 'src/app/entities/aposta';
import { ResultadoAposta } from 'src/app/entities/resultado_aposta';
import { TimePartida } from 'src/app/entities/time_partida';
import { ApostaService } from 'src/app/services/aposta.service';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';

@Component({
  selector: 'app-resultadoAposta',
  templateUrl: './resultado-aposta.component.html',
  styleUrls: ['./resultado-aposta.component.css']
})
export class ResultadoApostaComponent implements OnInit {

  boolPostForm: boolean = false
  resultadoAposta: ResultadoAposta = {id_aposta:0, status_time:false, id_time_partida:0}
  resultadoApostas: ResultadoAposta[] = []
  timesPartidas: TimePartida[]=[]
  apostas: Aposta[]=[]

  constructor(private resultadoApostaService: ResultadoApostaService,
     private apostaService: ApostaService,
     private timePartidaService: TimePartidaService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }
  onSubmit(){
    this.resultadoApostaService.incluir(this.resultadoAposta).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.resultadoApostaService.listar().subscribe(resp => this.resultadoApostas = resp)
    this.apostaService.listar().subscribe(resp => this.apostas = resp);
    this.timePartidaService.listar().subscribe(resp => this.timesPartidas = resp);
  }

}
