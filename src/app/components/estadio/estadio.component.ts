import { Component, OnInit } from '@angular/core';
import { Estadio } from 'src/app/entities/estadio';
import { EstadioService } from 'src/app/services/estadio.service';

@Component({
  selector: 'app-estadio',
  templateUrl: './estadio.component.html',
  styleUrls: ['./estadio.component.css']
})
export class EstadioComponent implements OnInit {

  boolPostForm: boolean = false
  estadio: Estadio = {descricao:""}
  estadios: Estadio[] = []

  constructor(private estadioService: EstadioService) { }

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
    this.estadioService.incluir(this.estadio).subscribe(resp=>console.log(resp))
  }

  listar(): void
  {
    this.estadioService.listar().subscribe(resp => this.estadios = resp)
  }

}
