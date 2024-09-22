export class Notaria {
  id: number;
  name: string;
  direccion: string;
  tarifaSocial: number;
  idDepartamento: number;
  idProvincia: number;
  idDistrito: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.direccion = '';
    this.tarifaSocial = 0;
    this.idDepartamento = 0;
    this.idProvincia = 0;
    this.idDistrito = 0;
  }
}
