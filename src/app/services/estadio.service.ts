import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadio } from '../entities/estadio';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {
  private apiUrl = "http://localhost:8080/estadio"
  constructor(private http:HttpClient) { }

  carregarEstadio(id: number): Observable<Estadio> {
    return this.http.get<Estadio>(`${this.apiUrl}/listar/${id}`)
  }

  listar():Observable<Estadio[]>{
    return this.http.get<Estadio[]>(`${this.apiUrl}/listar`)
  }
  incluir(estadio:Estadio):Observable<any>{
    return this.http.post(`${this.apiUrl}/incluir`, estadio)
  }
  alterar(estadio:Estadio):Observable<any>{
    return this.http.put(`${this.apiUrl}/alterar`, estadio)
  }
}
