import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AreasPractica } from 'src/app/models/areasPractica';
import { AreasPracticaService } from 'src/app/services/areas-practica.service';


@Component({
  selector: 'app-area-practica',
  templateUrl: './area-practica.component.html',
  styleUrls: ['./area-practica.component.css']
})
export class AreaPracticaComponent implements OnInit {

  public arregloAreasPractica: AreasPractica[] = [];
  public areaActual: AreasPractica;
  
  constructor( private areasPracticaService: AreasPracticaService, private router: Router, private route: ActivatedRoute) { 
    this.areaActual = new AreasPractica (null,"","","","","");
  }

  ngOnInit(): void {
    this.areasPracticaService.getAreasPractica().subscribe(
      res => {
        console.log(res);
        console.log("caragando areas de trabajo")
        let areasPractica = [];
        res.forEach(element => {
          areasPractica.push({id_areas_de_practica: element.payload.doc.id, 
            nombre: element.payload.doc.get("nombre"),
            definicion: element.payload.doc.get("definición"),
            descripcion: element.payload.doc.get("descripcion"),
            imagen: element.payload.doc.get("imagen"),
            objetivo: element.payload.doc.get("objetivo")
          });
        });
        this.arregloAreasPractica = areasPractica;
        this.route.paramMap.subscribe((parametro: ParamMap)=>{
          const codigo = parseFloat(parametro.get('idarea'));
          console.log(codigo);
          this.areaActual = this.arregloAreasPractica.find((area) => area.id_areas_de_practica == codigo);
          
          if(this.areaActual == null){
            this.router.navigate(['/not-found']);
          }
        });
      },
      err =>{
        console.log("si hay error");
        console.error(err);
      }
    );
  }

}
