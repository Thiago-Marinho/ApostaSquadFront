import { Component, OnInit } from '@angular/core';
import { Partida } from 'src/app/entities/partida';
import { Time } from 'src/app/entities/time';
import { TimePartida } from 'src/app/entities/time_partida';
import { PartidaService } from 'src/app/services/partida.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time-partida',
  templateUrl: './time-partida.component.html',
  styleUrls: ['./time-partida.component.css']
})
export class TimePartidaComponent implements OnInit {


  boolPostForm: boolean = false
  timePartida: TimePartida = {idPartida:0, idTime:0, resultado:false}
  timesPartidas: TimePartida[]=[]
  partidas: Partida[]=[]
  times: Time[]=[]

  constructor(private timePartidaService: TimePartidaService,
     private partidaService: PartidaService,
     private timeService: TimeService) { }

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
    this.timePartidaService.incluir(this.timePartida).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.timePartidaService.listar().subscribe(resp => this.timesPartidas = resp)
    this.partidaService.listar().subscribe(resp => this.partidas = resp);
    this.timeService.listar().subscribe(resp => this.times = resp);
  }
}
