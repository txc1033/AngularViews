import { Component, OnInit, Input, } from '@angular/core';
import { Persona, } from './persona.viewModel';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() persona: Persona;
  @Input() indice: number;

  // propiedades de input persona
  nombreInput: string;
  apellidoInput: string;
  edadInput: number;
  esHombreInput: boolean;


}
