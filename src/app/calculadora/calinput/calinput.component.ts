import { Calculo } from './calculadora.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calinput',
  templateUrl: './calinput.component.html',
  styleUrls: ['./calinput.component.css']
})
export class CalinputComponent implements OnInit {

  constructor() { }

  @Output() calculo = new EventEmitter<Calculo>();

  valorA: number;
  valorB: number;
  operacion = 'Seleccione una opcion...';

  ngOnInit(): void {
  }

  enviarOperacion() {
    if (this.operacion !== 'Seleccione una opcion...') {
      const nuevoCalculo = new Calculo(this.valorA, this.valorB, this.operacion);
      this.calculo.emit(nuevoCalculo);
    }
  }


}
