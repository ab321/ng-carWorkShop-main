import { Injectable } from '@angular/core';
import { Mechanic } from './mechanic-model';
import { CarShopWebApiService } from './car-shop-web-api.service';

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

  constructor(private apiClient: CarShopWebApiService) { 
    this.apiClient.getAllMechanics()
    .subscribe({
      next: (mechs) => {
        mechs.forEach(m => {
          m.hireDate = new Date(
            (m.hireDate as unknown) as string);
        });
        this.mechanics = mechs;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
