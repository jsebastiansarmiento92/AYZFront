import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominio from './dominios';
import { GrupoAreasModel } from '../models/grupoAreasModel';
import { GrupoTrabajoModel } from '../models/gruposTrabajoModel';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GrupoAreasService {

  public urldominio = Dominio.dominioGrupoAreas;

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getGrupoAreas(){
    return this.firestore.collection('id_grupo_area_model').snapshotChanges();
  }
}
