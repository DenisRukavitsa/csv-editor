import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvService} from '../csv.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.css']
})
export class CsvTableComponent implements OnInit, OnDestroy {
  public data = [];
  public readonly ROWS_PER_PAGE_OPTIONS = [5, 10, 20];
  public rowsPerPage = this.ROWS_PER_PAGE_OPTIONS[0];
  public currentPage = 1;
  public maxPageNumber = 0;
  public mathFloor = Math.floor;
  private lineChangesSubscription: Subscription;
  private textChangesSubscription: Subscription;

  constructor(public csvService: CsvService) {
  }

  ngOnInit() {
    this.lineChangesSubscription = this.csvService.lineChanges.subscribe(value => {
      this.data[value.line] = value.data;
    });

    this.textChangesSubscription = this.csvService.textChanges.subscribe(value => {
      this.data = value;

      this.calculateLastPage();
      this.checkIfLastPage();
    });
  }

  ngOnDestroy() {
    this.lineChangesSubscription.unsubscribe();
    this.textChangesSubscription.unsubscribe();
  }

  firstPage() {
    this.csvService.getTableUpdates();
    this.currentPage = 1;
  }

  previousPage() {
    this.csvService.getTableUpdates();
    this.currentPage--;
  }

  nextPage() {
    this.csvService.getTableUpdates();
    this.currentPage++;
  }

  lastPage() {
    this.csvService.getTableUpdates();
    this.calculateLastPage();
    this.currentPage = this.maxPageNumber;
  }

  goToPage(currentPage: number) {
    this.csvService.getTableUpdates();
    this.currentPage = currentPage;
  }

  changeRowsPerPage(event) {
    this.csvService.getTableUpdates();
    this.rowsPerPage = event.target.value;
    this.calculateLastPage();
    this.checkIfLastPage();
  }

  private calculateLastPage() {
    const linesCount = this.data.length;
    this.maxPageNumber = Math.floor(linesCount / this.rowsPerPage);
    if ((linesCount % this.rowsPerPage) > 0) { this.maxPageNumber++; }
  }

  private checkIfLastPage() {
    if (this.currentPage > this.maxPageNumber) {
      this.lastPage();
    }
  }

}
