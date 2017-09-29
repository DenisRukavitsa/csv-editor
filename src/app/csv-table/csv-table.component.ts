import { Component, OnInit } from '@angular/core';
import {CsvService} from '../csv.service';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.css']
})
export class CsvTableComponent implements OnInit {
  public data = [];
  public readonly ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 40];
  public rowsPerPage = this.ROWS_PER_PAGE_OPTIONS[0];
  public currentPage = 1;

  constructor(public csvService: CsvService) {
  }

  ngOnInit() {
    this.csvService.splittedLinesSubject.subscribe(data => {
      this.data = data;
      this.lastPage(true);
    });
  }

  firstPage() {
    this.csvService.fullParse();
    this.currentPage = 1;
  }

  previousPage() {
    this.csvService.fullParse();
    this.currentPage--;
  }

  nextPage() {
    this.csvService.fullParse();
    this.currentPage++;
  }

  lastPage(check: boolean) {
    const linesCount = this.data.length;
    let maxPageNumber = Math.floor(linesCount / this.rowsPerPage);
    if ((linesCount % this.rowsPerPage) > 0) { maxPageNumber++; }
    if (check) {
      if (this.currentPage > maxPageNumber) {
        this.currentPage = maxPageNumber;
      } else {
        return;
      }
    } else {
      this.currentPage = maxPageNumber;
    }
  }

  goToPage(currentPage: number) {
    this.csvService.fullParse();
    this.currentPage = currentPage;
  }

  changeRowsPerPage(event) {
    this.csvService.fullParse();
    this.rowsPerPage = event.target.value;
    this.lastPage(true);
  }

}
