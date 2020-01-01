import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valorA: number;
  valorB: number;
  resultado = 0;
  operacion = 'No definido';

  constructor() { }

  ngOnInit() {
  }


  Calcular() {

    switch (this.operacion) {
      case 'Sumar':
        this.resultado = this.valorA + this.valorB;
        break;
      case 'Restar':
        this.resultado = this.valorA - this.valorB;
        break;
      case 'Multiplicar':
        this.resultado = this.valorA * this.valorB;
        break;
      default:
        this.resultado = 0;
        break;
    }



  }

}
