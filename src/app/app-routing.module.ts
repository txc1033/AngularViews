import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { CaloutputComponent } from './calculadora/caloutput/caloutput.component';
import { CalinputComponent } from './calculadora/calinput/calinput.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'personas', component: PersonasComponent, children: [
    { path: 'lista', component: PersonaComponent },
    { path: 'agregar', component: FormularioComponent },
    { path: 'editar/:id', component: FormularioComponent },
  ] },
  { path: 'calculadora', component: CalculadoraComponent, children: [
    { path: 'formulario', component: CalinputComponent },
    { path: 'resultado', component: CaloutputComponent },
  ] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
