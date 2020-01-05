import { Component, OnInit } from '@angular/core';
import { Calculo } from './calinput/calculadora.model';
import { LogginServices } from '../Loggin.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado = 0;

  constructor(private login: LogginServices) { }

  ngOnInit() {
  }


  Calcular(calculo: Calculo) {

    this.login.enviaMensajeAConsola('Realizando Operacion de ' + calculo.operacion + ' entre ' + calculo.valorA + ' y ' + calculo.valorB );

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
