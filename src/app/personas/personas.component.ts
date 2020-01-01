import { Component, inject } from '@angular/core';
import { PersonaComponent } from './../persona/persona.component';
import { Persona, } from '../persona/persona.viewModel';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaComponent]
})
export class PersonasComponent {
  agregarPersona = false;
  agregarPersonaStatus = 'Esperando una accion';
  tituloPersona = '';
  // propiedades de input persona
  nombreInput: string;
  apellidoInput: string;
  edadInput: number;
  esHombreInput: boolean;
  // tslint:disable-next-line: max-line-length
  personas: Persona[] = [new Persona('javier', 'maldonado', 25, true), new Persona('franco', 'maldonado', 27, true)
    , new Persona('yanira', 'toledo', 22, false)];


  constructor() {
    setTimeout(
      () => {
        this.agregarPersona = true;
      }
      , 3000);
  }

  onCrearPersona() {
    if (this.tituloPersona !== '' && this.apellidoInput !== '' && this.edadInput > 1) {
      this.agregarPersonaStatus = 'Persona Agregada';
      this.onAgregarPersona(this.nombreInput, this.apellidoInput, this.edadInput, this.esHombreInput);
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

   onAgregarPersona(nombrePersona: string, apellidoPersona: string, edadPersona: number, esHombre: boolean) {
    const nuevaPersona = new Persona(nombrePersona, apellidoPersona, edadPersona, esHombre);
    this.personas.push(nuevaPersona);
  }


  onModificarPersona(event: Event) {
    this.tituloPersona = '';
    this.agregarPersonaStatus = 'Esperando una accion';
    if (this.nombreInput !== '') {
      this.agregarPersonaStatus = 'Ingresando a: ';
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

  }


}
