import {Component, inject} from '@angular/core';
import {DataService} from "../../../business-management/services/data.service";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

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
  private dataService: DataService = inject(DataService);
  person = this.dataService.person;
}
