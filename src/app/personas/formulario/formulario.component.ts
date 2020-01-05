import { LogginServices } from './../../Loggin.service';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona/persona.viewModel';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: []
})
export class FormularioComponent implements OnInit {
  @Input() status: string;
  @Output() personaCreada = new EventEmitter<Persona>();

  // propiedades de control persona
  agregarPersona = false;
  agregarPersonaStatus = this.loggin.getInicial();
  tituloPersona = '';

  // propiedades de input persona
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  @ViewChild('edadInput') edadInput: ElementRef;
  @ViewChild('esHombreInput') esHombreInput: ElementRef;




  constructor(private loggin: LogginServices) {
    setTimeout(
      () => { this.agregarPersona = true; } , 3000);
  }

  ngOnInit() {

  }


  onModificarPersona(event: Event) {
    this.tituloPersona = '';
    this.agregarPersonaStatus = this.loggin.getInicial();
    if (this.nombreInput.nativeElement.value !== '') {
      this.loggin.actualizarEstado('Ingresando a: ');
      this.agregarPersonaStatus = this.loggin.getEstado();
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

  }

  onCrearPersona() {
    if (this.tituloPersona !== '' && this.apellidoInput.nativeElement.value !== '' && this.edadInput.nativeElement.value > 1) {
      // tslint:disable-next-line:max-line-length
      const nuevaPersona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value, this.edadInput.nativeElement.value, this.esHombreInput.nativeElement.value);
      this.personaCreada.emit(nuevaPersona);
      this.agregarPersonaStatus = this.loggin.getEstado();

      this.limpiaInput();
    } else {
      this.loggin.actualizarEstado('No se a agregado una persona favor complete los campos');
      this.agregarPersonaStatus = this.loggin.getEstado();
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
