export class Solicitud {
  id: number;
  fechaEnvio?: Date;
  fechaFinalizacion?: Date;
  idEstado: number;
  idPersona: number;
  idNegocio?: number;
  idNotaria?: number;

  constructor() {
    this.id = 0;
    this.fechaFinalizacion = new Date();
    this.fechaEnvio = new Date();
    this.idEstado = 0;
    this.idPersona = 0;
    this.idNegocio = 0;
    this.idNotaria = 0;
  }
}
