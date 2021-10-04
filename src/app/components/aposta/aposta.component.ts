import { Component, OnInit } from '@angular/core';
import { Aposta } from 'src/app/entities/aposta';
import { Cliente } from 'src/app/entities/cliente';
import { Situacao } from 'src/app/entities/situacao';
import { ApostaService } from 'src/app/services/aposta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { SituacaoService } from 'src/app/services/situacao.service';

@Component({
  selector: 'app-aposta',
  templateUrl: './aposta.component.html',
  styleUrls: ['./aposta.component.css']
})
export class ApostaComponent implements OnInit {


  boolPostForm: boolean = false
  aposta: Aposta = {descricao:"", id_cliente:0, id_situacao:0, valor:0}
  apostas: Aposta[] = []
  situacoes: Situacao[]=[]
  clientes: Cliente[]=[]

  constructor(private apostaService: ApostaService, private situacaoService: SituacaoService,
              private clienteService: ClienteService) { }

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
    this.apostaService.incluir(this.aposta).subscribe(resp=>console.log(resp))
  }

  listar(): void
  {
    this.apostaService.listar().subscribe(resp => this.apostas = resp)
    this.situacaoService.listar().subscribe(resp => this.situacoes = resp)
    this.clienteService.listar().subscribe(resp => this.clientes = resp)
  }

}
