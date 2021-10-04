import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultadoAposta } from 'src/app/entities/resultado_aposta';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';

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

  constructor(private route: ActivatedRoute, private resultadoApostaService: ResultadoApostaService, private location: Location) { }

  ngOnInit(): void {
    this.carregarResultadoAposta()
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
