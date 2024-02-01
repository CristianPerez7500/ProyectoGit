// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroIngresado: number | null = null;
  resultado: string = '';

  verificarRango() {
    if (this.numeroIngresado !== null) {
      if (this.numeroIngresado >= 1 && this.numeroIngresado <= 100) {
        this.resultado = 'El número está en el rango de 1 a 100.';
      } else {
        this.resultado = 'El número NO está en el rango de 1 a 100.';
      }
    } else {
      this.resultado = 'Por favor, ingresa un número primero.';
    }
  }
}
