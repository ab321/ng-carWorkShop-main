import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {
    @Input() editMode: boolean = false;
    @Input() doEdit: boolean = false;
    @Input() mechanic: Mechanic = new Mechanic();
    @Output() doneEvent = new EventEmitter();

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

    done(){
      this.doEdit = false;
      this.doneEvent.emit();
    }
}
