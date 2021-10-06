
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

  carregarTime(id: number): Observable<Time> {
    return this.http.get<Time>(`${this.apiUrl}/${id}`)
  }

  listar():Observable<Time[]>{
    return this.http.get<Time[]>(`${this.apiUrl}/listar`)
  }
  incluir(time:Time):Observable<any>{
    return this.http.post(`${this.apiUrl}/incluir`, time)
  }
  alterar(time:Time):Observable<any>{
    return this.http.put(`${this.apiUrl}/alterar`, time)
  }

  listarFake(){

     let times: Time[] = [
       {id: 1, nome: 'Time1'},
       {id: 2, nome: 'Time2'}
    ]
    return times;

  }


  buscar( nome: string){

    let times: Time[] = [];
    times = this.listarFake();
    let result = false;

    times.forEach( (time) => {
      if (time.nome.startsWith(nome)){
        result = true;
      }
    });
    
    return result;

  }

}
