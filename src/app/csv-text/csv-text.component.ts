import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvService} from '../csv.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-csv-text',
  templateUrl: './csv-text.component.html',
  styleUrls: ['./csv-text.component.css']
})
export class CsvTextComponent implements OnInit, OnDestroy {
  private textArea: HTMLTextAreaElement;
  private tableChangesSubscription: Subscription;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.tableChangesSubscription = this.csvService.tableChanges.subscribe(changedCsv => {
      this.textArea.value = changedCsv;
    });
  }

  ngOnDestroy() {
    this.tableChangesSubscription.unsubscribe();
  }

  onKeyup(textArea: HTMLTextAreaElement) {
    this.textArea = textArea;
    this.csvService.parseCsv(textArea.value);
  }

}
