import { Component, OnInit } from '@angular/core';
import { Calculo } from './calinput/calculadora.model';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado = 0;

  constructor() { }

  ngOnInit() {
  }


  Calcular(calculo: Calculo) {

    switch (calculo.operacion) {
        case 'Sumar':
        this.resultado = calculo.valorA + calculo.valorB;
          break;
        case 'Restar':
        this.resultado = calculo.valorA - calculo.valorB;
          break;
        case 'Multiplicar':
          this.resultado = calculo.valorA * calculo.valorB;
          break;
        default:
          this.resultado = 0;
          break;
      }
  }

}
