import {Injectable, signal} from '@angular/core';
import {Persona} from "../model/persona.entity";
import {Departamento} from "../model/departamento.entity";
import {Distrito} from "../model/distrito.entity";
import {Provincia} from "../model/provincia.entity";
import {Estado} from "../model/estado.entity";
import {Negocio} from "../model/negocio.entity";
import {NombreNegocio} from "../model/nombre-negocio.entity";
import {Notaria} from "../model/notaria.entity";
import {Solicitud} from "../model/solicitud.entity";
import {TipoDocumento} from "../model/tipo-documento.entity";
import {TipoModalidadEmpresarial} from "../model/tipo-modalidad-empresarial.entity";
import {TipoPersona} from "../model/tipo-persona.entity";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  person = signal<Persona|null>(null);
  departments = signal<Departamento[]>([]);
  districts = signal<Distrito[]>([]);
  provinces = signal<Provincia[]>([]);
  states = signal<Estado[]>([]);
  documentTypes = signal<TipoDocumento[]>([]);
  businessModelsTypes = signal<TipoModalidadEmpresarial[]>([])
  personTypes = signal<TipoPersona[]>([]);
  notaries = signal<Notaria[]>([]);
  requests = signal<Solicitud[]>([]);
  businesses = signal<Negocio[]>([]);
  namesBusiness = signal<NombreNegocio[]>([]);
  constructor() { }
}
