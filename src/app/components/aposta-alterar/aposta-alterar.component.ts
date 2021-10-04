import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aposta } from 'src/app/entities/aposta';
import { ApostaService } from 'src/app/services/aposta.service';

@Component({
  selector: 'app-aposta-alterar',
  templateUrl: './aposta-alterar.component.html',
  styleUrls: ['./aposta-alterar.component.css']
})
export class ApostaAlterarComponent implements OnInit {

  aposta: Aposta = {
    id: 0,
    valor: 0,
    descricao: '',
    id_cliente: 0,
    id_situacao: 0
  }

  constructor(private route: ActivatedRoute, private apostaService: ApostaService, private location: Location) { }

  ngOnInit(): void {
    this.carregarAposta()
  }

  carregarAposta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.apostaService.carregarAposta(id).subscribe(resp => this.aposta = resp)
  }

  alterar(): void {
    if(this.aposta) {
      this.apostaService.alterar(this.aposta).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
