import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  boolPostForm: boolean = false
  cliente: Cliente = {nome:""}
  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

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
    this.clienteService.incluir(this.cliente).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.clienteService.listar().subscribe(resp => this.clientes = resp)
  }


}
