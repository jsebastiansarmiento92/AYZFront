import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holdingGroup';
  public isNoche : boolean;
  public hoy = new Date();
  
  ngOnInit(): void{
    var fecha = this.hoy.getHours();
    if (fecha>=5 && fecha<19) {
      this.isNoche = true;
    } else {
      this.isNoche = false;
    }
  }
}
