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

  AgregarPersona(nuevaPersona: Persona) {
    // tslint:disable-next-line: max-line-length
    this.loggin.enviaMensajeAConsola('Enviando Persona: \n Nombre: ' + nuevaPersona.nombre + ' Apellido: ' + nuevaPersona.apellido
      + '\n Edad: ' + nuevaPersona.edad + ' Sexo: ' + nuevaPersona.getSexo());
    this.personas.push(nuevaPersona);
    this.loggin.ActualizarEstado('Persona ' + nuevaPersona.nombre + ' Agregada');
  }

  EncontrarPersona(index: number) {
    const persona: Persona = this.personas[index];
    this.loggin.enviaMensajeAConsola('persona encontrada:' + persona.toString());
    return persona;
  }

  ModificarPersona(index: number, persona: Persona) {
    this.loggin.enviaMensajeAConsola('persona a modificar:' + persona.toString() + ' con indice:' + index);
    const persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  EliminarPersona(index: number) {
    this.loggin.enviaMensajeAConsola('eliminar persona con indice: ' + index);
    this.personas.splice(index, 1);
  }

}
