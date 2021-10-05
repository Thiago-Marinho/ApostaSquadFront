import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estadio } from 'src/app/entities/estadio';
import { EstadioService } from 'src/app/services/estadio.service';

@Component({
  selector: 'app-estadio',
  templateUrl: './estadio.component.html',
  styleUrls: ['./estadio.component.css']
})
export class EstadioComponent implements OnInit {

  boolPostForm: boolean = false
  estadio: Estadio = {
    id: 0,
    descricao:""
  }
  estadios: Estadio[] = []

  form: FormGroup

  constructor(private estadioService: EstadioService, private formBuilder: FormBuilder) { 
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
    this.estadioService.incluir(this.estadio).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.estadioService.listar().subscribe(resp => this.estadios = resp)
  }

}
