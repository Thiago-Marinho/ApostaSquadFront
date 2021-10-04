
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '../entities/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private apiUrl = "http://localhost:3000/time"
  constructor(private http:HttpClient) { }
  listar():Observable<Time[]>{
    return this.http.get<Time[]>(`${this.apiUrl}`)
  }
  incluir(time:Time):Observable<any>{
    return this.http.post(`${this.apiUrl}`, time)
  }
  alterar(time:Time):Observable<any>{
    return this.http.post(`${this.apiUrl}/alterar`, time)
  }
}
