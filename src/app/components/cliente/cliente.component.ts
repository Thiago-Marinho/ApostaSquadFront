import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: ['', [
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
    if(!this.form.valid) {
      alert('invalid data!')
      document.getElementById('sbmit')?.classList.add('disabled-button')
      return
    }
    this.clienteService.incluir(this.cliente).subscribe(resp=>{this.hidePostForm(); this.listar()})
  }

  listar(): void
  {
    this.clienteService.listar().subscribe(resp => this.clientes = resp)
  }


}
