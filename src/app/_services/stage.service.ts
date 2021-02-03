import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Stage} from '../Models/Stage';

const API_URL= 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) { }

  ajoutConv(stage: Stage): Observable<any> {
    return this.http.post(API_URL + 'addConv', { responseType: 'text' });
  };
  allstage(): Observable<any> {
    return this.http.get(API_URL + 'listStage', { responseType: 'text' });
  }
}
