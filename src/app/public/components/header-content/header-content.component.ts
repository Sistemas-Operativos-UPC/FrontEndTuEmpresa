import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
