import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculadoraComponent, FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
