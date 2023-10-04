import { Component } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent {

  mechanics: Mechanic[] = [
    {
      "lastName": "Doe",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    },
    {
      "lastName": "Doe",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    },
    {
      "lastName": "Doe",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    }
  ]
}
