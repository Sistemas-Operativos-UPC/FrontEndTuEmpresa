import {Component, inject} from '@angular/core';
import {DataService} from "../../../business-management/services/data.service";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {ApiService} from "../../../shared/services/api.service";
import {Departamento} from "../../../business-management/model/departamento.entity";
import {Distrito} from "../../../business-management/model/distrito.entity";
import {Provincia} from "../../../business-management/model/provincia.entity";
import {Estado} from "../../../business-management/model/estado.entity";
import {TipoDocumento} from "../../../business-management/model/tipo-documento.entity";
import {TipoModalidadEmpresarial} from "../../../business-management/model/tipo-modalidad-empresarial.entity";
import {TipoPersona} from "../../../business-management/model/tipo-persona.entity";
import {Notaria} from "../../../business-management/model/notaria.entity";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private apiService: ApiService = inject(ApiService);
  private dataService: DataService = inject(DataService);

  person = this.dataService.person;

  constructor(){
    this.getDepartments();
    this.getDistricts();
    this.getProvinces();
    this.getStates();
    this.getDocumentTypes();
    this.getBusinessModelsTypes();
    this.getPersonTypes();
    this.getNotaries();
  }

  getDepartments(){
    this.apiService.getDepartamentos()
      .subscribe(response =>{
        this.dataService.departments.set(response as Departamento[]);
      })
  }
  getDistricts(){
    this.apiService.getDistritos()
      .subscribe(response =>{
        this.dataService.districts.set(response as Distrito[]);
      })
  }
  getProvinces(){
    this.apiService.getProvincias()
      .subscribe(response =>{
        this.dataService.provinces.set(response as Provincia[]);
      })
  }
  getStates(){
    this.apiService.getEstados()
      .subscribe(response =>{
        this.dataService.states.set(response as Estado[]);
      })
  }
  getDocumentTypes(){
    this.apiService.getTipoDocumentos()
      .subscribe(response =>{
        this.dataService.documentTypes.set(response as TipoDocumento[]);
      })
  }
  getBusinessModelsTypes(){
    this.apiService.getTipoModalidadEmpresariales()
      .subscribe(response =>{
        this.dataService.businessModelsTypes.set(response as TipoModalidadEmpresarial[]);
      })
  }
  getPersonTypes(){
    this.apiService.getTipoPersonas()
      .subscribe(response =>{
        this.dataService.personTypes.set(response as TipoPersona[]);
      })
  }
  getNotaries(){
    this.apiService.getNotarias()
      .subscribe(response =>{
        this.dataService.notaries.set(response as Notaria[]);
      })
  }
}
