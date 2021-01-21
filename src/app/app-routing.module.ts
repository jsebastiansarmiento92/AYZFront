import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbogadoComponent } from './componentes/abogado/abogado.component';
import { AreaPracticaComponent } from './componentes/area-practica/area-practica.component';
import { AreaPractica2Component } from './componentes/area-practica2/area-practica2.component';
import { AreaPractica3Component } from './componentes/area-practica3/area-practica3.component';
import { AreaPractica4Component } from './componentes/area-practica4/area-practica4/area-practica4.component';
import { AreaPractica5Component } from './componentes/area-practica5/area-practica5/area-practica5.component';
import { AreaPractica6Component } from './componentes/area-practica6/area-practica6/area-practica6.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeadComponent } from './componentes/head/head.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { TecnicosComponent } from './componentes/tecnicos/tecnicos/tecnicos.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'abogado', component: AbogadoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'areaPractica', component: AreaPracticaComponent },
  { path: 'areaPractica2', component: AreaPractica2Component },
  { path: 'areaPractica3', component: AreaPractica3Component },
  { path: 'areaPractica4', component: AreaPractica4Component },
  { path: 'areaPractica5', component: AreaPractica5Component },
  { path: 'areaPractica6', component: AreaPractica6Component },
  { path: 'tecnicos', component: TecnicosComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
