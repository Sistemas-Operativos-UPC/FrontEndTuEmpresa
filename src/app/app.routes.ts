import { Routes } from '@angular/router';
import {HeaderContentComponent} from "./public/components/header-content/header-content.component";

export const routes: Routes = [
  {
    path: '',
    component: HeaderContentComponent,
    children: [
      {
        path: 'business-register',
        title: 'business-register',
        loadComponent: ()=>import('./business-management/pages/business-register/business-register.component').then(component => component.BusinessRegisterComponent)
      },
      {
        path: 'business',
        title: 'business-details',
        loadComponent: ()=>import('./business-management/pages/business-details/business-details.component').then(component=>component.BusinessDetailsComponent)
      },
      {
        path: 'login',
        title: 'login',
        loadComponent: ()=>import('./public/pages/login/login.component').then(component => component.LoginComponent)
      },
      {
        path: '',
        title: 'inicio',
        loadComponent: ()=>import('./public/pages/inicio/inicio.component').then(component => component.InicioComponent)
      },
      {
        path: 'home',
        title: 'home',
        loadComponent: ()=>import('./public/pages/home/home.component').then(component => component.HomeComponent)
      },
      {
        path: '**',
        title: 'not-found',
        loadComponent: ()=>import('./public/pages/not-found/not-found.component').then(component=>component.NotFoundComponent)
      }
    ]
  }
];
