import { Injectable } from '@angular/core';
import { Mechanic } from './mechanic-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarShopWebApiService {
  headers = new HttpHeaders().set('Accept', 'application/json')
  baseUrl = 'http://localhost:5000/';
  mechanicsAll = 'mechanics/all'
  mechanic = 'mechanics'

  constructor(private http: HttpClient) { }

  public getAllMechanics(){
    return this.http.get<Mechanic[]>(this.baseUrl + this.mechanicsAll, {headers:this.headers});
  }

  public getMechanic(id: number){
    return this.http.get<Mechanic>(this.baseUrl + this.mechanic + '/' + id, {headers:this.headers});
  }

  public addMechanic(mechanic: Mechanic){
    return this.http.post(this.baseUrl + this.mechanic, mechanic, {headers:this.headers});
  }

  public deleteMechanic(id: number){
    return this.http.delete(this.baseUrl + this.mechanic + '/' + id, {headers:this.headers});
  }

  public updateMechanic(mechanic: Mechanic){
    return this.http.put(this.baseUrl + this.mechanic, mechanic, {headers:this.headers});
  }
}
