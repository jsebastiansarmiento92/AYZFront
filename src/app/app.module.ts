import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewsComponent } from './componentes/news/news.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AbogadoComponent } from './componentes/abogado/abogado.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AreaPracticaComponent } from './componentes/area-practica/area-practica.component';
import { AreasPracticaService } from './services/areas-practica.service'
import { from } from 'rxjs';
 
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    ProfileComponent,
    NotFoundComponent,
    AbogadoComponent,
    ContactoComponent,
    AreaPracticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AreasPracticaService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
