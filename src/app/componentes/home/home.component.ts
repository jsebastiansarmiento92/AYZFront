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
        this.arregloGruposTrabajo = res;
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
        areasPractica.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
      console.log("las areas de practica son ",areasPractica);
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


