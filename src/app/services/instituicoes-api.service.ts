import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InstituicoesApiModel } from './instituicoes-api-model';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
​
  public get(): Observable<InstituicoesApiModel[]> {
    return this.http.get<InstituicoesApiModel[]>(this.apiUrl);
  }

}
