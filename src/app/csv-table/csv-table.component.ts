import { Component, OnInit } from '@angular/core';
import {CsvService} from '../csv.service';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.css']
})
export class CsvTableComponent implements OnInit {
  public readonly ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 40];
  public rowsPerPage = this.ROWS_PER_PAGE_OPTIONS[0];
  public page = 1;

  constructor(public csvService: CsvService) {
  }

  ngOnInit() {
  }

  previous() {
    this.csvService.fullParse();
    this.page--;
  }

  next() {
    this.csvService.fullParse();
    this.page++;
  }

  goToPage(page: number) {
    this.csvService.fullParse();
    this.page = page;
  }

  changeRowsPerPage($event) {
    this.csvService.fullParse();
    this.rowsPerPage = $event.srcElement.value;

    const linesCount = this.csvService.splittedLines.length;
    let maxPageNumber = Math.floor(linesCount / this.rowsPerPage);
    if ((linesCount % this.rowsPerPage) > 0) { maxPageNumber++; }
    if (this.page > (maxPageNumber)) {
      this.page = maxPageNumber;
    }
  }

}
