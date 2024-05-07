import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SecurityService} from "../services/security-service.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public securityService: SecurityService) {
  }
}
