import { Component } from '@angular/core';
import {CsvService} from './csv.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public csvService: CsvService) {
  }
}
