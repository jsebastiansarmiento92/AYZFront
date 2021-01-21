import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominios  from './dominios';
import { AreasPractica } from '../models/areasPractica'

@Injectable({
  providedIn: 'root'
})
export class AreasPracticaService {

  private url: string = Dominios.dominioAreasPracticas;
  
  constructor( private http: HttpClient) { 

  }

  getAreasPractica(){
    return this.http.get<AreasPractica[]>(this.url);
  } 
}
