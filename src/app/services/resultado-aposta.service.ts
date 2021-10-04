import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoAposta } from '../entities/resultado_aposta';

@Injectable({
  providedIn: 'root'
})
export class ResultadoApostaService {

  url = 'http://localhost:8080/resultadoaposta'

  constructor(private http: HttpClient) { }

  carregarResultadoAposta(id: number): Observable<ResultadoAposta> {
    return this.http.get<ResultadoAposta>(`${this.url}/${id}`)
  }

  listar(): Observable<ResultadoAposta[]> {
    return this.http.get<ResultadoAposta[]>(`${this.url}/listar`)
  }

  incluir(novoResultadoAposta: ResultadoAposta): Observable<ResultadoAposta> {
    return this.http.post<ResultadoAposta>(`${this.url}/incluir`, novoResultadoAposta)
  }

  alterar(resultadoAposta: ResultadoAposta): Observable<any> {
    return this.http.put<any>(`${this.url}/alterar`, resultadoAposta)
  }
  
}
