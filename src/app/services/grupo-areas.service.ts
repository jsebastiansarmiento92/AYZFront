import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominio from './dominios';
import { GrupoAreasModel } from '../models/grupoAreasModel';
import { GrupoTrabajoModel } from '../models/gruposTrabajoModel';

@Injectable({
  providedIn: 'root'
})
export class GrupoAreasService {

  public urldominio = Dominio.dominioGrupoAreas;

  constructor(private http: HttpClient) { }

  getGrupoAreas(){
    return this.http.get<GrupoAreasModel[]>(this.urldominio);
  }
  getAbogados(){
    return this.http.get<GrupoTrabajoModel>(this.urldominio+"/abogados");
  }
}
