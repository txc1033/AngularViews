import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Componentes';
  contenido = true;

  CambiaComponente() {
    if (this.contenido) {
      this.contenido = false;
    } else {
      this.contenido = true;
    }
  }
}
