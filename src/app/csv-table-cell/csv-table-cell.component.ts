import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CsvService} from '../csv.service';

@Component({
  selector: 'app-csv-table-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './csv-table-cell.component.html',
  styleUrls: ['./csv-table-cell.component.css']
})
export class CsvTableCellComponent implements OnInit {
  @Input() row: number;
  @Input() column: number;
  @Input() value: string;

  constructor(private csvService: CsvService) {}

  ngOnInit() {}

  onKeyup(cell: HTMLInputElement): void {
    this.csvService.cellChange(this.row, this.column, cell.value);
  }

}
