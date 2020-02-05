import { AppRoutingModule } from './app-routing.module';
import { LogginServices } from './Loggin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { CalinputComponent } from './calculadora/calinput/calinput.component';
import { CaloutputComponent } from './calculadora/caloutput/caloutput.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculadoraComponent, FormularioComponent, CalinputComponent, CaloutputComponent, ErrorComponent, InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LogginServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
