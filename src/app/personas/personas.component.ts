import { Component, inject, EventEmitter, Output, Input } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { Persona, } from './persona/persona.viewModel';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaComponent]
})
export class PersonasComponent {

  // tslint:disable-next-line: max-line-length
  personas: Persona[] = [new Persona('javier', 'maldonado', 25, true), new Persona('franco', 'maldonado', 27, true)
    , new Persona('yanira', 'toledo', 22, false)];


  constructor() {}

  onAgregarPersona(nuevaPersona: Persona) {
    this.personas.push(nuevaPersona);
  }


}
