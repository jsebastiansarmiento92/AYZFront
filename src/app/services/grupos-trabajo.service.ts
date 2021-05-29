import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominio from './dominios';
import { GrupoTrabajoModel } from '../models/gruposTrabajoModel';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GruposTrabajoService {

  public url = Dominio.dominioGrupoTrabajo;

  constructor( private http: HttpClient, private firestore: AngularFirestore) { }

  getGruposTrabajo(){
    return this.firestore.collection('id_grupo_de_trabajo').snapshotChanges();
  }

}
