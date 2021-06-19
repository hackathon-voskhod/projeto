import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeisApi } from './leis-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeisApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/leisMulheres.json';

  public get(): Observable<LeisApi[]> {
    return this.http.get<LeisApi[]>(this.apiUrl);
  }
}
