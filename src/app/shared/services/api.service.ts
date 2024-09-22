import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Negocio} from "../../business-management/model/negocio.entity";
import {Solicitud} from "../../business-management/model/solicitud.entity";
import {NombreNegocio} from "../../business-management/model/nombre-negocio.entity";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://20.206.200.43/api';
  private http: HttpClient = inject(HttpClient)

  // Negocio endpoints
  getNegocios() {
    return this.http.get(`${this.baseUrl}/Negocio`);
  }

  // Departamento endpoints
  getDepartamentos() {
    return this.http.get(`${this.baseUrl}/Departamento`);
  }

  // Distrito endpoints
  getDistritos() {
    return this.http.get(`${this.baseUrl}/Distrito`);
  }

  // Estado endpoints
  getEstados() {
    return this.http.get(`${this.baseUrl}/Estado`);
  }

  // Notaria endpoints
  getNotarias() {
    return this.http.get(`${this.baseUrl}/Notaria`);
  }

  // Provincia endpoints
  getProvincias() {
    return this.http.get(`${this.baseUrl}/Provincia`);
  }

  // TipoDocumento endpoints
  getTipoDocumentos() {
    return this.http.get(`${this.baseUrl}/TipoDocumento`);
  }

  // TipoModalidadEmpresarial endpoints
  getTipoModalidadEmpresariales() {
    return this.http.get(`${this.baseUrl}/TipoModalidadEmpresarial`);
  }

  // TipoPersona endpoints
  getTipoPersonas() {
    return this.http.get(`${this.baseUrl}/TipoPersona`);
  }

  // Solicitud endpoints
  getSolicitudesByPersonaId(personaId: number) {
    return this.http.get(`${this.baseUrl}/Solicitud/Persona/${personaId}`);
  }

  createSolicitud(solicitud: any) {
    return this.http.post(`${this.baseUrl}/Solicitud`, solicitud);
  }

  // NombreNegocio endpoints
  getNombreNegociosByNegocioId(negocioId: number) {
    return this.http.get(`${this.baseUrl}/NombreNegocio/Negocio/${negocioId}`);
  }

  createNombreNegocio(nombreNegocio: any) {
    return this.http.post(`${this.baseUrl}/NombreNegocio`, nombreNegocio);
  }

  // Persona endpoints
  login(numeroDocumento: string, contrasena: string) {
    const formData: FormData = new FormData();
    formData.append('NumeroDocumento', numeroDocumento);
    formData.append('Contrasena', contrasena);

    return this.http.post(`${this.baseUrl}/Personas/login`, formData);
  }

  addBusiness(business: Negocio){
    return this.http.post(`${this.baseUrl}/Negocio`, business);
  }

  addRequest(request: Solicitud){
    return this.http.post(`${this.baseUrl}/Solicitud`, request);
  }

  addBusinessName(businessName: NombreNegocio){
    return this.http.post(`${this.baseUrl}/NombreNegocio`, businessName);
  }
}
