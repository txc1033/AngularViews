import { PersonaService } from './personas.services';
import { Component, inject, EventEmitter, Output, Input } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { Persona, } from './persona/persona.viewModel';
import { stringify } from 'querystring';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaComponent, PersonaService]
})
export class PersonasComponent {

  // tslint:disable-next-line: max-line-length
  personas: Persona[] = [];


  constructor(private personaService: PersonaService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
     this.personas = this.personaService.personas;
  }

  onAgregarPersona(nuevaPersona: Persona) {
      this.personaService.AgregarPersona(nuevaPersona);
  }


}
