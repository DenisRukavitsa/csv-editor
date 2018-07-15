import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading = false;

  constructor(csvService: CsvService) {
    csvService.loading.subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    });
  }

  ngOnInit() {
  }

}
