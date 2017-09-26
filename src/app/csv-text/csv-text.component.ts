import { Component, OnInit } from '@angular/core';
import {CsvService} from '../csv.service';

@Component({
  selector: 'app-csv-text',
  templateUrl: './csv-text.component.html',
  styleUrls: ['./csv-text.component.css']
})
export class CsvTextComponent implements OnInit {
  private textArea: HTMLTextAreaElement;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.tableChanges.subscribe(changedCsv => {
      this.textArea.value = changedCsv;
    });
  }

  onKeyup(textArea: HTMLTextAreaElement) {
    this.textArea = textArea;
    this.csvService.parseCsv(textArea.value);
  }

}
