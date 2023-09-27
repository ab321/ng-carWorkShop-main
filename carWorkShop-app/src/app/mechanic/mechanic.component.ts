import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {
    firstName = 'John';
    lastName = 'Doe';
    hired: Date = new Date('01/01/2020');

    getYearsSinceHired(): number{
      const today = new Date();
      const hired = this.hired;
      const diff = today.getFullYear() - hired.getFullYear();
      return diff;
    }
}
