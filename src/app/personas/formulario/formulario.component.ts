import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  @ViewChild('edadInput') edadInput: ElementRef;
  @ViewChild('esHombreInput') esHombreInput: ElementRef;




  constructor() {
    setTimeout(
      () => { this.agregarPersona = true; } , 3000);
  }

  ngOnInit() { }


  onModificarPersona(event: Event) {
    this.tituloPersona = '';
    this.agregarPersonaStatus = 'Esperando una accion';
    if (this.nombreInput.nativeElement.value !== '') {
      this.agregarPersonaStatus = 'Ingresando a: ';
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

  }

  onCrearPersona() {
    if (this.tituloPersona !== '' && this.apellidoInput.nativeElement.value !== '' && this.edadInput.nativeElement.value > 1) {
      // tslint:disable-next-line:max-line-length
      const nuevaPersona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value, this.edadInput.nativeElement.value, this.esHombreInput.nativeElement.value);
      this.personaCreada.emit(nuevaPersona);
      this.agregarPersonaStatus = 'Persona Agregada';
      this.limpiaInput();
    } else {
      this.agregarPersonaStatus = 'No se a agregado una persona favor complete los campos ';
    }

  }

  limpiaInput() {
    this.nombreInput.nativeElement.value = '';
    this.apellidoInput.nativeElement.value = '';
    this.edadInput.nativeElement.value = 0;
    this.esHombreInput.nativeElement.value = false;
    this.tituloPersona = '';
  }


}
