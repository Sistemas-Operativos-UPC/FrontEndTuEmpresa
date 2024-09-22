export class Persona {
  id: number;
  primerNombre: string;
  segundoNombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  numeroDocumento: string;
  contrasena: string;
  celular: number;
  idTipoDocumento: number;
  idDepartamento: number;
  idProvincia: number;
  idDistrito: number;
  idTipoPersona: number;

  constructor() {
    this.id = 0;
    this.primerNombre = '';
    this.segundoNombre = '';
    this.apellidoPaterno = '';
    this.apellidoMaterno = '';
    this.numeroDocumento = '';
    this.contrasena = '';
    this.celular = 0;
    this.idTipoDocumento = 0;
    this.idDepartamento = 0;
    this.idProvincia = 0;
    this.idDistrito = 0;
    this.idTipoPersona = 0;
  }
}
