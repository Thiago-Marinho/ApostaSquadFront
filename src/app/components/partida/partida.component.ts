import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estadio } from 'src/app/entities/estadio';
import { Partida } from 'src/app/entities/partida';
import { EstadioService } from 'src/app/services/estadio.service';
import { PartidaService } from 'src/app/services/partida.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  boolPostForm: boolean = false
  partida: Partida = {descricao:"",id_estadio:0, data:""}
  partidas: Partida[] = []
  situacoes: Estadio[]=[]

  form: FormGroup

  constructor(private partidaService: PartidaService, private estadioService: EstadioService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      descricao: ['', [
        Validators.required
      ]]
    })
  }

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
    this.partidaService.incluir(this.partida).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.partidaService.listar().subscribe(resp => this.partidas = resp)
    this.estadioService.listar().subscribe(resp => this.situacoes = resp)

  }

}
