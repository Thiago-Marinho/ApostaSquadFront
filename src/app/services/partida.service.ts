import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../entities/partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  
  private apiUrl = "http://localhost:8080/partida"

  constructor(private http:HttpClient) { }

  carregarPartida(id: number): Observable<Partida> {
    return this.http.get<Partida>(`${this.apiUrl}/${id}`)
  }
  
  listar():Observable<Partida[]>{
    return this.http.get<Partida[]>(`${this.apiUrl}/listar`)
  }
  incluir(partida:Partida):Observable<any>{
    return this.http.post(`${this.apiUrl}/incluir`, partida)
  }
  alterar(partida:Partida):Observable<any>{
    return this.http.put(`${this.apiUrl}/alterar`, partida)
  }
}
