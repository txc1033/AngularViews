import { PersonaService } from './personas.services';
import { Component, OnInit } from '@angular/core';
import { Persona, } from './persona/persona.viewModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];


  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  irAgregar() {
    this.router.navigate(['./personas/agregar'], { queryParams: { modoEdicion: 0 } });
  }

}
