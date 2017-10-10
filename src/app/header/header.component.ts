import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private csvService: CsvService) { }

  ngOnInit() {
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

}
