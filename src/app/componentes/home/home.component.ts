import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasPractica } from '../../models/areasPractica';
import { AreasPracticaService } from '../../services/areas-practica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arregloAreasPractica: AreasPractica[] = [];
  public areaSelecionada: AreasPractica;
  constructor( private areasPracticaService: AreasPracticaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.areasPracticaService.getAreasPractica().subscribe(
      res => {
        console.log(res);
        this.arregloAreasPractica = res;
      },
      err =>{
        console.log("si hay error");
        console.error(err);
      }
    );
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

  }


