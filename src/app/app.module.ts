// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importa el módulo de enrutamiento

import { AppComponent } from './app.component';

// Define tus rutas
const routes: Routes = [
  // Aquí puedes definir tus rutas
  // Por ejemplo:
  // { path: 'otra-pagina', component: OtraPaginaComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configura el enrutador con las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
