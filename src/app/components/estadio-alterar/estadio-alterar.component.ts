import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estadio } from 'src/app/entities/estadio';
import { EstadioService } from 'src/app/services/estadio.service';

@Component({
  selector: 'app-estadio-alterar',
  templateUrl: './estadio-alterar.component.html',
  styleUrls: ['./estadio-alterar.component.css']
})
export class EstadioAlterarComponent implements OnInit {

  estadio: Estadio = {
    id: 0,
    descricao: ''
  }

  constructor(private route: ActivatedRoute, private estadioService: EstadioService, private location: Location) { }

  ngOnInit(): void {
    this.carregarEstadio()
  }

  carregarEstadio(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.estadioService.carregarEstadio(id).subscribe(resp => this.estadio = resp)
  }

  alterar(): void {
    if(this.estadio) {
      this.estadioService.alterar(this.estadio).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
