import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partida } from 'src/app/entities/partida';
import { Time } from 'src/app/entities/time';
import { TimePartida } from 'src/app/entities/time_partida';
import { PartidaService } from 'src/app/services/partida.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time-partida-alterar',
  templateUrl: './time-partida-alterar.component.html',
  styleUrls: ['./time-partida-alterar.component.css']
})
export class TimePartidaAlterarComponent implements OnInit {

  timePartida: TimePartida = {
    id: 0,
    resultado: false,
    id_partida: 0,
    id_time: 0
  }

  times: Time[] = []
  partidas: Partida[] = []

  constructor(private route: ActivatedRoute, private timePartidaService: TimePartidaService, private location: Location, private timeService: TimeService, private partidaService: PartidaService) { }

  ngOnInit(): void {
    this.carregarTimePartida()
    this.timeService.listar().subscribe(resp => this.times = resp)
    this.partidaService.listar().subscribe(resp => this.partidas = resp)
  }

  carregarTimePartida(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.timePartidaService.carregarTimePartida(id).subscribe(resp => this.timePartida = resp)
  }

  alterar(): void {
    if(this.timePartida) {
      this.timePartidaService.alterar(this.timePartida).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
