import { Component, OnInit } from '@angular/core';
import { Situacao } from 'src/app/entities/situacao';
import { SituacaoService } from 'src/app/services/situacao.service';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css']
})
export class SituacaoComponent implements OnInit {

  boolPostForm: boolean = false
  situacao: Situacao = {descricao:""}
  situacaos: Situacao[] = []

  constructor(private situacaoService: SituacaoService) { }

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
    this.situacaoService.incluir(this.situacao).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.situacaoService.listar().subscribe(resp => this.situacaos = resp)
  }


}
