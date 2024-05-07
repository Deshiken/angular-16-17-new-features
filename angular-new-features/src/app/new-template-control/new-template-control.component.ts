import { Component } from '@angular/core';

@Component({
  selector: 'app-new-template-control',
  standalone: true,
  imports: [],
  templateUrl: './new-template-control.component.html',
  styleUrl: './new-template-control.component.scss'
})
export class NewTemplateControlComponent {
  UserType = UserType
  loggedIn: boolean = false;
  foods: Array<string> = ["tacos", "burgers", "pasta"];
  accessLevel: UserType = UserType.USER
}

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN',
  OTHER = 'OTHER',
}
