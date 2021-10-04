import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aposta } from 'src/app/entities/aposta';
import { Partida } from 'src/app/entities/partida';
import { ResultadoAposta } from 'src/app/entities/resultado_aposta';
import { Time } from 'src/app/entities/time';
import { TimePartida } from 'src/app/entities/time_partida';
import { ApostaService } from 'src/app/services/aposta.service';
import { PartidaService } from 'src/app/services/partida.service';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-resultado-aposta-alterar',
  templateUrl: './resultado-aposta-alterar.component.html',
  styleUrls: ['./resultado-aposta-alterar.component.css']
})
export class ResultadoApostaAlterarComponent implements OnInit {

  resultadoAposta: ResultadoAposta = {
    id: 0,
    status_time: false,
    id_aposta: 0,
    id_time_partida: 0
  }

  apostas: Aposta[] = []
  timesPartidas: TimePartida[] = []

  timePartida: TimePartida = {
    resultado: false,
    id_partida: 0,
    id_time: 0
  }

  time: Time = {
    id: 0,
    nome: ''
  }

  partida: Partida = {
    id: 0,
    data: '',
    descricao: '',
    id_estadio: 0
  }

  constructor(private route: ActivatedRoute, private timeService: TimeService, private partidaService: PartidaService, private resultadoApostaService: ResultadoApostaService, private location: Location, private apostaService: ApostaService, private timePartidaService: TimePartidaService) { }

  ngOnInit(): void {
    this.carregarResultadoAposta()
    this.apostaService.listar().subscribe(resp => this.apostas = resp)
    this.timePartidaService.listar().subscribe(resp => this.timesPartidas = resp)
    this.timePartidaService.carregarTimePartida(this.resultadoAposta.id_time_partida).subscribe(resp => this.timePartida = resp)
    this.timeService.carregarTime(this.timePartida.id_time).subscribe(resp => this.time = resp)
    this.partidaService.carregarPartida(this.timePartida.id_partida).subscribe(resp => this.partida = resp)
  }

  carregarResultadoAposta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.resultadoApostaService.carregarResultadoAposta(id).subscribe(resp => this.resultadoAposta = resp)
  }

  alterar(): void {
    if(this.resultadoAposta) {
      this.resultadoApostaService.alterar(this.resultadoAposta).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
