import { AppRoutingModule } from './app-routing.module';
import { LogginServices } from './Loggin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';

import { PersonaComponent } from './personas/persona/persona.component';
import { PersonaService } from './personas/personas.services';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalinputComponent } from './calculadora/calinput/calinput.component';
import { CaloutputComponent } from './calculadora/caloutput/caloutput.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    CalculadoraComponent,
    CalinputComponent,
    CaloutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogginServices, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
