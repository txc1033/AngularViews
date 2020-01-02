import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Persona } from '../persona/persona.viewModel';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() status: string;
  @Output() personaCreada = new EventEmitter<Persona>();

  // propiedades de control persona
  agregarPersona = false;
  agregarPersonaStatus = 'Esperando una accion';
  tituloPersona = '';

  // propiedades de input persona
  nombreInput: string;
  apellidoInput: string;
  edadInput: number;
  esHombreInput: boolean;




  constructor() {
    setTimeout(
      () => { this.agregarPersona = true; } , 3000);
  }

  ngOnInit() { }


  onModificarPersona(event: Event) {
    this.tituloPersona = '';
    this.agregarPersonaStatus = 'Esperando una accion';
    if (this.nombreInput !== '') {
      this.agregarPersonaStatus = 'Ingresando a: ';
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

  }

  onCrearPersona() {
    if (this.tituloPersona !== '' && this.apellidoInput !== '' && this.edadInput > 1) {
      const nuevaPersona = new Persona(this.nombreInput, this.apellidoInput, this.edadInput, this.esHombreInput);
      this.personaCreada.emit(nuevaPersona);
      this.agregarPersonaStatus = 'Persona Agregada';
      this.limpiaInput();
    } else {
      this.agregarPersonaStatus = 'No se a agregado una persona favor complete los campos ';
    }

  }

  limpiaInput() {
    this.nombreInput = '';
    this.apellidoInput = '';
    this.edadInput = 0;
    this.esHombreInput = false;
    this.tituloPersona = '';
  }


}
