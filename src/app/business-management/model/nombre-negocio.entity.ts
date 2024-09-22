export class NombreNegocio {
  id: number;
  nombre: string;
  abreviatura?: string;
  idNegocio: number;
  idEstado: number;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.abreviatura = '';
    this.idNegocio = 0;
    this.idEstado = 0;
  }
}
