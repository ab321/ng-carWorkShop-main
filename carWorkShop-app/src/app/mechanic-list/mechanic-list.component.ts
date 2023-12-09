import { Component } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';
import { MechanicRepositoryService } from '../shared/mechanic-repository.service';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent {
  
  constructor(public mechanicRepository: MechanicRepositoryService) {}

  newMechanic: Mechanic = {"lastName": "", "firstName": "", "hireDate": new Date(Date.now())};
  doEdit: boolean = false;

  onNew(){
    this.newMechanic = new Mechanic();
    this.doEdit = true;
  }

  onDelete(i: number){
    this.mechanicRepository.mechanics.splice(i, 1);
  }

  onDoneEvent(){
    this.doEdit = false;
    this.mechanicRepository.mechanics.push(this.newMechanic);
  }
}
