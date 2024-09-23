import {Component, computed, inject, signal} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {DataService} from "../../services/data.service";
import {Solicitud} from "../../model/solicitud.entity";
import {Negocio} from "../../model/negocio.entity";
import {DatePipe, JsonPipe} from "@angular/common";
import {Estado} from "../../model/estado.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatCardHeader
  ],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.css'
})
export class BusinessDetailsComponent {
  private apiService: ApiService = inject(ApiService);
  private dataService: DataService = inject(DataService);
  states = this.dataService.states;

  idPerson = this.dataService.person()?.id;
  requests = signal<Solicitud[]>([]);
  business = signal<Negocio[]>([]);

  requestsCompleted = computed(()=>{
    return this.requests().map((request: Solicitud) => {
      const businessId = request.idNegocio;
      const business = this.business().find((business: Negocio) => business.id == businessId);
      const state = this.states().find((state: Estado) => state.id == request.idEstado);
      return {
        request,
        business,
        state
      }
    });
  })


  constructor(){
    this.getRequests();
    this.getBusiness();
  }

  getRequests(){
    if(this.idPerson == undefined){
      return;
    }
    this.apiService.getSolicitudesByPersonaId(this.idPerson).subscribe((data: any) => {
      const requestsData = data as Solicitud[];
      this.requests.set(requestsData);
    });
  }
  getBusiness(){
    if(this.idPerson == undefined){
      return;
    }
    this.apiService.getNegocios()
    .subscribe((data: any) => {
      const businessData = data as Negocio[];
      this.business.set(businessData);
    });
  }
}
