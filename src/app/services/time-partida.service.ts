import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimePartida } from '../entities/time_partida';

@Injectable({
  providedIn: 'root'
})
export class TimePartidaService {

  url = 'http://localhost:8080/timepartida'

  constructor(private http: HttpClient) { }

  carregarTimePartida(id: number): Observable<TimePartida> {
    return this.http.get<TimePartida>(`${this.url}/${id}`)
  }

  carregarTimes(idPartida: number): Observable<Time[]> {
    return this.http.get<Time[]>(`${this.url}/times/${idPartida}`)
  }

  listar(): Observable<TimePartida[]> {
    return this.http.get<TimePartida[]>(`${this.url}/listar`)
  }

  incluir(novoTimePartida: TimePartida): Observable<TimePartida> {
    return this.http.post<TimePartida>(`${this.url}/incluir`, novoTimePartida)
  }

  alterar(timePartida: TimePartida): Observable<any> {
    return this.http.put<any>(`${this.url}/alterar`, timePartida)
  }

}
