import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbogadoComponent } from './componentes/abogado/abogado.component';
import { AreaPracticaComponent } from './componentes/area-practica/area-practica.component';
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
