import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aposta } from 'src/app/entities/aposta';
import { Cliente } from 'src/app/entities/cliente';
import { Situacao } from 'src/app/entities/situacao';
import { ApostaService } from 'src/app/services/aposta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { SituacaoService } from 'src/app/services/situacao.service';
import { SituacaoComponent } from '../situacao/situacao.component';

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
    idCliente: 0,
    idSituacao: 0
  }

  cliente: Cliente = {
    id: 0,
    nome: ''
  }

  situacao: Situacao = {
    id: 0,
    descricao: ''
  }

  clientes: Cliente[] = []
  situacoes: Situacao[] = []

  constructor(private route: ActivatedRoute, private apostaService: ApostaService, private location: Location, private clienteService: ClienteService, private situacaoService: SituacaoService) { }

  ngOnInit(): void {
    this.carregarAposta()
  }

  carregarAposta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.apostaService.carregarAposta(id).subscribe(resp => this.aposta = resp)
    this.clienteService.listar().subscribe(resp => this.clientes = resp)
    this.situacaoService.listar().subscribe(resp => this.situacoes = resp)
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
