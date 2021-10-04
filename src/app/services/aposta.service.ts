import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aposta } from '../entities/aposta';

@Injectable({
  providedIn: 'root'
})
export class ApostaService {

  url = 'http://localhost:8080/aposta'

  constructor(private http: HttpClient) { }

  carregarAposta(id: number): Observable<Aposta> {
    return this.http.get<Aposta>(`${this.url}/${id}`)
  }

  listar(): Observable<Aposta[]> {
    return this.http.get<Aposta[]>(`${this.url}/listar`)
  }

  incluir(novaAposta: Aposta): Observable<Aposta> {
    return this.http.post<Aposta>(`${this.url}/incluir`, novaAposta)
  }

  alterar(aposta: Aposta): Observable<any> {
    return this.http.put<any>(`${this.url}/alterar`, aposta)
  }
  
}
