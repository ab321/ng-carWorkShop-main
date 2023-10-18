import { Injectable } from '@angular/core';
import { Mechanic } from './shared/mechanic-model';

@Injectable({
  providedIn: 'root'
})
export class MechanicRepositoryService {

  public mechanics: Mechanic[] = [
    {
      "lastName": "Doe1",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    },
    {
      "lastName": "Doe2",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    },
    {
      "lastName": "Doe3",
      "firstName": "John",
      "hireDate": new Date('2020-01-01')
    }
  ];

}
