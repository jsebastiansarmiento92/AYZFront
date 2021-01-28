import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { TecnicosComponent } from './componentes/tecnicos/tecnicos/tecnicos.component';
import { FooterNocheComponent } from './componentes/footerNoche/footer-noche/footer-noche.component';
import { HeadNocheComponent } from './componentes/headNoche/head-noche/head-noche.component';

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
    AreaPracticaComponent,
    TecnicosComponent,
    FooterNocheComponent,
    HeadNocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
