import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Situacao } from '../entities/situacao';

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  url = 'http://localhost:8080/situacao'

  constructor(private http: HttpClient) { }

  carregarSituacao(id: number): Observable<Situacao> {
    return this.http.get<Situacao>(`${this.url}/${id}`)
  }

  listar(): Observable<Situacao[]> {
    return this.http.get<Situacao[]>(`${this.url}/listar`)
  }

  incluir(novaSituacao: Situacao): Observable<Situacao> {
    return this.http.post<Situacao>(`${this.url}/incluir`, novaSituacao)
  }

  alterar(situacao: Situacao): Observable<any> {
    return this.http.put<any>(`${this.url}/alterar`, situacao)
  }
  
}
