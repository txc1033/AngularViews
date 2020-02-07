export class LogginServices {

  private estado: string;


    enviaMensajeAConsola( mensaje: string) {
      console.log(mensaje);
    }

    ActualizarEstado( mensaje: string) {
      this.estado = mensaje;
    }

    getEstado() {
      return this.estado;
    }

    // tslint:disable-next-line: one-line
    getInicial(){
      this.estado = 'Esperando una accion';
      return this.estado;
    }
}
