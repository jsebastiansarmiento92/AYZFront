import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Dominios  from './dominios';
import { AreasPractica } from '../models/areasPractica';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AreasPracticaService {

  private url: string = Dominios.dominioAreasPracticas;
  
  constructor( private http: HttpClient,
    private firestore: AngularFirestore) { }

  getAreasPractica(){
    return this.firestore.collection('id_areas_practica').snapshotChanges();
  }
}
