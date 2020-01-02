export class Persona {

  constructor(public nombre: string, public apellido: string, public edad: number, public esHombre: boolean) {
  }

  getSexo(): string {
    return this.esHombre ? 'Hombre' : 'Mujer';
  }

}
