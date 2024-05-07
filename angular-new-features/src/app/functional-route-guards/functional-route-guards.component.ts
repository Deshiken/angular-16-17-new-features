import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-functional-route-guards',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './functional-route-guards.component.html',
  styleUrl: './functional-route-guards.component.scss'
})
export class FunctionalRouteGuardsComponent {
  someWork: string|null = null;
  unsavedChangesPresent: boolean = false;

  canNavigateAway(): boolean {
    if (!this.someWork) {
      this.unsavedChangesPresent = false;
      return true;
    }
    this.unsavedChangesPresent = true;
    return false;
  }

}
