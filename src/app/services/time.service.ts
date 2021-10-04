
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '../entities/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private apiUrl = "http://localhost:8080/time"
  constructor(private http:HttpClient) { }

  carregarCliente(id: number): Observable<Time> {
    return this.http.get<Time>(`${this.apiUrl}/${id}`)
  }

  listar():Observable<Time[]>{
    return this.http.get<Time[]>(`${this.apiUrl}/listar`)
  }
  incluir(time:Time):Observable<any>{
    return this.http.post(`${this.apiUrl}/incluir`, time)
  }
  alterar(time:Time):Observable<any>{
    return this.http.post(`${this.apiUrl}/alterar`, time)
  }
}
