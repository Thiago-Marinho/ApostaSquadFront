import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../entities/partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  
  private apiUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }
  
  listar():Observable<Partida[]>{
    return this.http.get<Partida[]>(`${this.apiUrl}/listar`)
  }
  incluir(partida:Partida):Observable<any>{
    return this.http.post(`${this.apiUrl}/incluir`, partida)
  }
  alterar(partida:Partida):Observable<any>{
    return this.http.post(`${this.apiUrl}/alterar`, partida)
  }
}
