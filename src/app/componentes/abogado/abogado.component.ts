import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GrupoAreasModel } from 'src/app/models/grupoAreasModel';
import { GrupoTrabajoModel } from 'src/app/models/gruposTrabajoModel';
import { GrupoAreasService } from 'src/app/services/grupo-areas.service';
import { GruposTrabajoService } from 'src/app/services/grupos-trabajo.service';

@Component({
  selector: 'app-abogado',
  templateUrl: './abogado.component.html',
  styleUrls: ['./abogado.component.css']
})
export class AbogadoComponent implements OnInit {

  public grupoSeleccionado: GrupoTrabajoModel;
  public arreglogruposTrabajos: GrupoTrabajoModel[]=[];
  public arregloGruposAreas: GrupoAreasModel[] = [];

  constructor(private grupotrabajoService:GruposTrabajoService, private grupoAreasService: GrupoAreasService , private router: Router, private route: ActivatedRoute) { 
    this.grupoSeleccionado = new GrupoTrabajoModel (null,"","","","","");
  }

  ngOnInit(): void {
    this.inicializarGrupoTrabajo();
    this.saberAreasPracticas();
  }


  /**
   * saberAreasPracticas
   */
  public saberAreasPracticas() {
    this.grupoAreasService.getGrupoAreas().subscribe(res =>{
      console.log("cargando grupos y areas");
      console.log(res);      
      let areasGrupo = [];
        res.forEach(element => {
          areasGrupo.push({id: element.payload.doc.id,
            id_grupo_de_practica: element.payload.doc.get("id_grupo_de_practica"),
            id_areas_de_practica: element.payload.doc.get("id_areas_de_practica")
          });
        });
      this.arregloGruposAreas = areasGrupo.filter((element) => 
      element.id_grupo_de_trabajo.id_grupo_de_trabajo == 1);
      console.log("despues del filtro");
      console.log(this.arregloGruposAreas);
    },err =>{
      console.log("si hay error");
        console.error(err);
    });
  }

  /**
   * inicializarGrupoTrabajo
   */
  public inicializarGrupoTrabajo() {
    this.grupotrabajoService.getGruposTrabajo().subscribe(
      res => {
        console.log(res);
        console.log("cargo grupos");
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
        this.arreglogruposTrabajos = areasGrupo
        this.route.paramMap.subscribe((parametro: ParamMap)=>{
          const codigo = parseFloat(parametro.get('idgrupo'));
          this.grupoSeleccionado = this.arreglogruposTrabajos.find((grupo)=> grupo.id_grupo_de_trabajo == codigo);
          
          if(this.grupoSeleccionado == null){
            this.router.navigate(['/not-found']);
          }
        });
      },err =>{
        console.log("si hay error");
        console.error(err);
      }
    );
  }
}
