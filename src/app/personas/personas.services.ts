import { Persona } from './persona/persona.viewModel';
import { LogginServices } from '../Loggin.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonaService {

  personas: Persona[] = [
      new Persona('javier', 'maldonado', 25, true)
    , new Persona('franco', 'maldonado', 27, true)
    , new Persona('yanira', 'toledo', 22, false)
  ];

  constructor(private loggin: LogginServices) {}

  onAgregarPersona(nuevaPersona: Persona) {
    // tslint:disable-next-line: max-line-length
    this.loggin.enviaMensajeAConsola('Enviando Persona: \n Nombre: ' + nuevaPersona.nombre + ' Apellido: ' + nuevaPersona.apellido
      + '\n Edad: ' + nuevaPersona.edad + ' Sexo: ' + nuevaPersona.getSexo());
    this.personas.push(nuevaPersona);
    this.loggin.actualizarEstado('Persona ' + nuevaPersona.nombre + ' Agregada');
  }

}
