import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.viewModel';
import { LogginServices } from './../../Loggin.service';
import { PersonaService } from './../personas.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [PersonaService]
})
export class FormularioComponent implements OnInit {


  // propiedades de input persona
  nombreInput: string;
  apellidoInput: string;
  edadInput: number;
  esHombreInput: boolean;


  // propiedades de control persona
  agregarPersona = false;
  agregarPersonaStatus = this.loggin.getInicial();
  tituloPersona = '';

  // identificador persona
  index: number;
  modoEdicion: number;

  constructor(private loggin: LogginServices,
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute) {
    setTimeout(
      () => { this.agregarPersona = true; } , 3000);
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      let persona: Persona = this.personaService.EncontrarPersona(this.index);
      if (persona != null) {
        //Cargamos los valores en el formulario solo si hay un index (un registro a editar)
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
        this.edadInput = persona.edad;
        this.esHombreInput = persona.esHombre;
      }
    }
  }

  onCrearPersona() {
    if (this.tituloPersona !== '' && this.apellidoInput !== '' && this.edadInput > 1) {
      const nuevaPersona = new Persona(this.nombreInput, this.apellidoInput, this.edadInput, this.esHombreInput);
        if (this.index) {
          this.personaService.ModificarPersona(this.index, nuevaPersona);
        } else {
          this.personaService.AgregarPersona(nuevaPersona);
        }
      this.agregarPersonaStatus = this.loggin.getEstado();
      this.LimpiaInput();
      this.router.navigate(['personas']);
    } else {
      this.loggin.ActualizarEstado('No se a agregado una persona favor complete los campos');
      this.agregarPersonaStatus = this.loggin.getEstado();
      return;
    }

  }

  onModificarPersonaFormulario(event: Event) {
    this.tituloPersona = '';
    this.agregarPersonaStatus = this.loggin.getInicial();
    if (this.nombreInput !== '') {
      this.loggin.ActualizarEstado('Ingresando a: ');
      this.agregarPersonaStatus = this.loggin.getEstado();
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

  }

  onEliminarPersona() {
    if (this.index != null) {
      this.personaService.EliminarPersona(this.index)
    }
    this.router.navigate(['personas']);
  }

  LimpiaInput() {
    this.nombreInput = '';
    this.apellidoInput = '';
    this.edadInput = 0;
    this.esHombreInput = false;
    this.tituloPersona = '';
  }


}
