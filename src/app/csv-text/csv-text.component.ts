import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {CsvService} from '../csv.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-csv-text',
  templateUrl: './csv-text.component.html',
  styleUrls: ['./csv-text.component.css']
})
export class CsvTextComponent implements OnInit, OnDestroy {
  @ViewChild('csv', {read: ViewContainerRef}) textArea: ViewContainerRef;
  private tableChangesSubscription: Subscription;
  private csvUploadedSubscription: Subscription;

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.tableChangesSubscription = this.csvService.tableChanges.subscribe(changedCsv => {
      this.textArea.element.nativeElement.value = changedCsv;
    });

    this.csvUploadedSubscription = this.csvService.csvUploaded.subscribe(uploadedCsv => {
      this.textArea.element.nativeElement.value = uploadedCsv;
    });
  }

  ngOnDestroy() {
    this.tableChangesSubscription.unsubscribe();
    this.csvUploadedSubscription.unsubscribe();
  }

  onKeyup(textArea: HTMLTextAreaElement) {
    this.csvService.parseCsv(textArea.value);
  }

}
