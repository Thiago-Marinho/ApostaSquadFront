import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estadio } from 'src/app/entities/estadio';
import { Partida } from 'src/app/entities/partida';
import { EstadioService } from 'src/app/services/estadio.service';
import { PartidaService } from 'src/app/services/partida.service';

@Component({
  selector: 'app-partida-alterar',
  templateUrl: './partida-alterar.component.html',
  styleUrls: ['./partida-alterar.component.css']
})
export class PartidaAlterarComponent implements OnInit {

  partida: Partida = {
    id: 0,
    data: '',
    descricao: '',
    id_estadio: 0
  }

  estadios: Estadio[] = []

  constructor(private route: ActivatedRoute, private partidaService: PartidaService, private location: Location, private estadioService: EstadioService) { }

  ngOnInit(): void {
    this.carregarPartida()
    this.estadioService.listar().subscribe(resp => this.estadios = resp)
  }

  carregarPartida(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.partidaService.carregarPartida(id).subscribe(resp => this.partida = resp)
  }

  alterar(): void {
    if(this.partida) {
      this.partidaService.alterar(this.partida).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
