import { Component } from '@angular/core';
import { MechanicRepositoryService } from '../mechanic-repository.service';

@Component({
  selector: 'app-datastatus',
  templateUrl: './datastatus.component.html',
  styleUrls: ['./datastatus.component.css']
})
export class DatastatusComponent {
  constructor(public mechDataService: MechanicRepositoryService) { }
}
