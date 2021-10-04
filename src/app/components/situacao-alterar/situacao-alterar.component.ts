import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Situacao } from 'src/app/entities/situacao';
import { SituacaoService } from 'src/app/services/situacao.service';

@Component({
  selector: 'app-situacao-alterar',
  templateUrl: './situacao-alterar.component.html',
  styleUrls: ['./situacao-alterar.component.css']
})
export class SituacaoAlterarComponent implements OnInit {

  situacao: Situacao = {
    id: 0,
    descricao: ''
  }

  constructor(private route: ActivatedRoute, private situacaoService: SituacaoService, private location: Location) { }

  ngOnInit(): void {
    this.carregarSituacao()
  }

  carregarSituacao(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.situacaoService.carregarSituacao(id).subscribe(resp => this.situacao = resp)
  }

  alterar(): void {
    if(this.situacao) {
      this.situacaoService.alterar(this.situacao).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
