import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoTrabajoModel } from 'src/app/models/gruposTrabajoModel';
import { GruposTrabajoService } from 'src/app/services/grupos-trabajo.service';
import { AreasPractica } from '../../models/areasPractica';
import { AreasPracticaService } from '../../services/areas-practica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public arregloAreasPractica: AreasPractica[] = [];
  public templateActual: boolean;
  public arregloGruposTrabajo: GrupoTrabajoModel[] = [];
  public areaSelecionada: AreasPractica;
  public hoy = new Date();
  public grupoSelecionado: GrupoTrabajoModel;
  constructor(private grupoTrabajoSevice: GruposTrabajoService,
    private areasPracticaService: AreasPracticaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var fecha = this.hoy.getHours();
    if (fecha>=5 && fecha<19) {
      this.templateActual = true;
    } else {
      this.templateActual = false;
    }
    
    this.inicilizarAreasPractica();
    this.inicializarGrupoTrabajo();
  }

  /**
   * inicializarGrupoTrabajo
   */
  public inicializarGrupoTrabajo() {
    this.grupoTrabajoSevice.getGruposTrabajo().subscribe(
      res =>{
        console.log(res);
        let areasGrupo = [];
        res.forEach(element => {
          areasGrupo.push({id_grupo_de_trabajo: element.payload.doc.id, 
            nombre_area: element.payload.doc.get("nombre_area"),
            especialidad: element.payload.doc.get("especialidad"),
            descripcion: element.payload.doc.get("descripcion"),
            imagen: element.payload.doc.get("imagen"),
            perfil_profesional: element.payload.doc.get("perfil_profesional")
          });
        });
        this.arregloGruposTrabajo = areasGrupo
      },err =>{
        console.log("si hay error");
        console.error(err);
      }
    );
  }

  /**
   * inicilizarAreasPractica
   */
  public inicilizarAreasPractica() {
    let areasPractica = [];
    this.areasPracticaService.getAreasPractica().subscribe((data) => {
      data.forEach(element => {
        areasPractica.push({id_areas_de_practica: element.payload.doc.id, 
          nombre: element.payload.doc.get("nombre"),
          definicion: element.payload.doc.get("definición"),
          descripcion: element.payload.doc.get("descripcion"),
          imagen: element.payload.doc.get("imagen"),
          objetivo: element.payload.doc.get("objetivo")
        });
      });
      this.arregloAreasPractica = areasPractica;
      console.log("las areas de practica son ", this.arregloAreasPractica);
    });
  }

  /**
   * SelecionAreaPractica
   */
  public selecionAreaPractica(area: AreasPractica) {
    this.areaSelecionada = area;
    console.log(this.areaSelecionada);
    console.log("entra seleccion de areas de practica");
    console.log(this.areaSelecionada.id_areas_de_practica);
    this.router.navigate(['/areaPractica', this.areaSelecionada.id_areas_de_practica]);
  }

  /**
   * selecionGrupoTrabajo
   */
  public selecionGrupoTrabajo(grupo: GrupoTrabajoModel) {
    this.grupoSelecionado = grupo;
    console.log("entra seleccion de areas de practica");
    this.router.navigate(['/abogado',this.grupoSelecionado.id_grupo_de_trabajo])
  }

}


