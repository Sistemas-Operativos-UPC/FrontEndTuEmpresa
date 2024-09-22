import {Component, inject} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ApiService} from "../../../shared/services/api.service";
import {Departamento} from "../../model/departamento.entity";
import {Distrito} from "../../model/distrito.entity";
import {Provincia} from "../../model/provincia.entity";
import {Estado} from "../../model/estado.entity";
import {TipoDocumento} from "../../model/tipo-documento.entity";
import {TipoModalidadEmpresarial} from "../../model/tipo-modalidad-empresarial.entity";
import {TipoPersona} from "../../model/tipo-persona.entity";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Notaria} from "../../model/notaria.entity";
import {MatButton} from "@angular/material/button";
import {Negocio} from "../../model/negocio.entity";
import {Solicitud} from "../../model/solicitud.entity";
import {NombreNegocio} from "../../model/nombre-negocio.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-business-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './business-register.component.html',
  styleUrl: './business-register.component.css'
})
export class BusinessRegisterComponent {
  private apiService: ApiService = inject(ApiService);
  private dataService: DataService = inject(DataService);

  selectedBusinessModelType = new FormControl('1');
  namesForm = new FormGroup({
    name1: new FormControl(''),
    name2: new FormControl(''),
    name3: new FormControl(''),
    name4: new FormControl(''),
    name5: new FormControl(''),
    abbreviation1: new FormControl(''),
    abbreviation2: new FormControl(''),
    abbreviation3: new FormControl(''),
    abbreviation4: new FormControl(''),
    abbreviation5: new FormControl(''),
  });
  selectedLocationDepartment = new FormControl('1');
  selectedLocationProvince = new FormControl('1');
  selectedLocationDistrict = new FormControl('1');

  selectedNotary = new FormControl('1');

  businessModelTypes = this.dataService.businessModelsTypes;
  departments = this.dataService.departments;
  provinces = this.dataService.provinces;
  districts = this.dataService.districts;
  person = this.dataService.person;
  notaries = this.dataService.notaries;

  constructor(private router: Router){
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

  ngOnInit(){
    this.registerBusinessNames(1);
  }

  registerBusinessNames(idBusiness: Number){
    let names = this.namesForm.value;
    if (names.name1 && names.abbreviation1){
      let businessName = new NombreNegocio();
      businessName.nombre = names.name1;
      businessName.abreviatura = names.abbreviation1;
      businessName.idNegocio = Number(idBusiness);
      businessName.idEstado = 1;
      this.apiService.addBusinessName(businessName)
        .subscribe({
          next: (result) => {
            console.log('Nombre de negocio creado:', result);
          },
          error: (error) => console.error('Error creando nombre de negocio:', error)
        });
    }
    if (names.name2 && names.abbreviation2) {
      let businessName = new NombreNegocio();
      businessName.nombre = names.name2;
      businessName.abreviatura = names.abbreviation2;
      businessName.idNegocio = Number(idBusiness);
      businessName.idEstado = 1;
      this.apiService.addBusinessName(businessName)
        .subscribe({
          next: (result) => {
            console.log('Nombre de negocio creado:', result);
          },
          error: (error) => console.error('Error creando nombre de negocio:', error)
        });
    }
    if (names.name3 && names.abbreviation3) {
      let businessName = new NombreNegocio();
      businessName.nombre = names.name3;
      businessName.abreviatura = names.abbreviation3;
      businessName.idNegocio = Number(idBusiness);
      businessName.idEstado = 1;
      this.apiService.addBusinessName(businessName)
        .subscribe({
          next: (result) => {
            console.log('Nombre de negocio creado:', result);
          },
          error: (error) => console.error('Error creando nombre de negocio:', error)
        });
    }
    if (names.name4 && names.abbreviation4) {
      let businessName = new NombreNegocio();
      businessName.nombre = names.name4;
      businessName.abreviatura = names.abbreviation4;
      businessName.idNegocio = Number(idBusiness);
      businessName.idEstado = 1;
      this.apiService.addBusinessName(businessName)
        .subscribe({
          next: (result) => {
            console.log('Nombre de negocio creado:', result);
          },
          error: (error) => console.error('Error creando nombre de negocio:', error)
        });
    }
    if (names.name5 && names.abbreviation5) {
      let businessName = new NombreNegocio();
      businessName.nombre = names.name5;
      businessName.abreviatura = names.abbreviation5;
      businessName.idNegocio = Number(idBusiness);
      businessName.idEstado = 1;
      this.apiService.addBusinessName(businessName)
        .subscribe({
          next: (result) => {
            console.log('Nombre de negocio creado:', result);
          },
          error: (error) => console.error('Error creando nombre de negocio:', error)
        });
    }
    }

  onRegister(){
    let business = new Negocio();
    business.idTipoModalidad = Number(this.selectedBusinessModelType.value);
    business.idDepartamento = Number(this.selectedLocationDepartment.value);
    business.idProvincia = Number(this.selectedLocationProvince.value);
    business.idDistrito = Number(this.selectedLocationDistrict.value);

    let requested = new Solicitud();
    requested.fechaEnvio = new Date();
    requested.fechaFinalizacion = new Date();
    requested.fechaFinalizacion.setDate(requested.fechaFinalizacion.getDate() + 10);
    requested.idEstado = 1;
    if (this.dataService.person()?.id) {
      requested.idPersona = Number(this.dataService.person()?.id);
    }
    requested.idNotaria = Number(this.selectedNotary.value);

    this.apiService.addBusiness(business)
      .subscribe({
        next: (result) => {
          console.log('Negocio creado:', result);
          const business = result as Negocio;
          requested.idNegocio = business.id;
          this.apiService.addRequest(requested)
            .subscribe({
              next: (result) => {
                console.log('Solicitud creada:', result);
                const request = result as Solicitud;
                this.registerBusinessNames(business.id);
                this.router.navigate(['/home']);
              },
              error: (error) => console.error('Error creando solicitud:', error)
            });
        },
        error: (error) => console.error('Error creando negocio:', error)
      });
  }
}
