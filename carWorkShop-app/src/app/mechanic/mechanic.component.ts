import { Component, Input } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {
    @Input() editMode: boolean = false;
    doEdit: boolean = false;
    @Input() mechanic: Mechanic = new Mechanic();

    getYearsSinceHired(): number{
      const today = new Date();
      const hired = this.mechanic.hireDate;
      const diff = today.getFullYear() - hired.getFullYear();
      return diff;
    }

    parseDate(eventDate: Event): Date {
      const dateString = (eventDate.target as HTMLInputElement).value;
      if(dateString){
        return new Date(dateString);
      }

      return new Date();
    }
}
