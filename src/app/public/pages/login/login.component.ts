import {Component, inject, signal} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "../../../business-management/services/data.service";
import {Persona} from "../../../business-management/model/persona.entity";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    MatSuffix,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = signal(true);
  private apiService: ApiService = inject(ApiService);
  private dataService: DataService = inject(DataService);

  loginForm = new FormGroup({
    documentNumber: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router) {
  }

  login(){
    if(this.loginForm.value.documentNumber && this.loginForm.value.password){
      this.apiService.login(this.loginForm.value.documentNumber, this.loginForm.value.password)
        .subscribe( {
          next: (response)=>{
            this.dataService.person.set(response as Persona);
            this.router.navigate(['/home']);
          },
          error: (error)=>{
            console.log(error)
          }
        });
    }
  }
  onClick() {
    this.hide.set(!this.hide());
  }
  onSubmit(event: Event){
    event.preventDefault();
    this.login();
  }
}
