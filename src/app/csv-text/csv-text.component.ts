import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {CsvService} from '../csv.service';
import {Subscription} from 'rxjs/Subscription';
import * as saver from 'file-saver';

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

  uploadCsv(input: HTMLInputElement) {
    input.click();
  }

  csvUploaded($event) {
    const file = $event.target.files[0];
    const fileReader = new FileReader();

    if (!(file.name as string).toLowerCase().endsWith('.csv')) {
      alert('Please upload the file with .csv extension.');
      return;
    }

    fileReader.onloadend = () => {
      const csv = fileReader.result as string;
      this.csvService.fileUploaded(csv);
      $event.target.value = '';
    };
    fileReader.readAsText(file);
  }

  downloadCsv() {
    const date = new Date();
    saver.saveAs(new Blob([this.csvService.getCsv()],
      {type: 'text/plain;charset=utf-8'}),
      'csv-online-editor_' +
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_` +
      `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.csv`);
  }

}

