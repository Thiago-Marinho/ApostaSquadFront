import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/cliente'

  constructor(private http: HttpClient) { }

  carregarCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`)
  }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}/listar`)
  }

  incluir(novoCliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}/incluir`, novoCliente)
  }

  alterar(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.url}/alterar`, cliente)
  }
  
}
