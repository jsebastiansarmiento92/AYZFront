import { Component, OnInit } from '@angular/core';

const templateDia='./home.component.html';
const templateNoche='./homeNoche.component.html';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    if(true){
      //this.templateFin=templateNoche;
    }
  }

}
