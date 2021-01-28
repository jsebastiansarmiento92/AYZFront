import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominio from './dominios';
import { GrupoTrabajoModel } from '../models/gruposTrabajoModel';

@Injectable({
  providedIn: 'root'
})
export class GruposTrabajoService {

  public url = Dominio.dominioGrupoTrabajo;

  constructor( private http: HttpClient) { }

  getGruposTrabajo(){
    return this.http.get<GrupoTrabajoModel[]>(this.url);
  }

}
