import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/entities/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-alterar',
  templateUrl: './cliente-alterar.component.html',
  styleUrls: ['./cliente-alterar.component.css']
})
export class ClienteAlterarComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    nome: ''
  }

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private location: Location) { }

  ngOnInit(): void {
    this.carregarCliente()
  }

  carregarCliente(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.clienteService.carregarCliente(id).subscribe(resp => this.cliente = resp)
  }

  alterar(): void {
    if(this.cliente) {
      this.clienteService.alterar(this.cliente).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
