import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CsvService {
  lineChanges = new Subject<{line: number; data: Array<string>}>();
  textChanges = new Subject<Array<Array<string>>>();
  tableChanges = new Subject<string>();
  csvUploaded = new Subject<string>();
  private updatedLines = [];
  private lines = [];

  parseCsv(csv: string): void {
    csv = csv.trim();
    const changedLines = csv.split('\n');
    if (changedLines.length !== this.lines.length) {
      this.fullParse(csv, '\n');
    } else {
      this.changeLine(changedLines);
    }
  }

  fileUploaded(file: string) {
    this.csvUploaded.next(file);
    if (file.includes('\n')) {
      this.fullParse(file.trim(), '\n');
    } else {
      this.fullParse(file.trim(), '\r');
    }
  }

  getCsv(): string {
    return this.lines.join('\n');
  }

  cellChange(row: number, column: number, newValue: string) {
    this.updatedLines.push(row);

    const lineToChange = this.lines[row].split(',');
    const changedLine = [...lineToChange.slice(0, column),
                         newValue,
                         ...lineToChange.slice(column + 1, lineToChange.length)];
    this.lines[row] = changedLine.join(',');
    this.tableChanges.next(this.lines.join('\n'));
  }

  getTableUpdates() {
    this.updatedLines.forEach(updatedLine => {
      this.lineChanges.next({line: updatedLine, data: this.lines[updatedLine].split(',')});
    });
    this.updatedLines = [];
  }

  private fullParse(csv: string, separator: string) {
    const splittedLines = [];
    this.lines = csv.split(separator);
    this.lines.forEach(line => {
      splittedLines.push(line.split(','));
    });
    this.textChanges.next(splittedLines);
  }

  private changeLine(changedLines: Array<string>) {
    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i] !== changedLines[i]) {
        this.lineChanges.next({line: i, data: changedLines[i].split(',')});
        break;
      }
    }
    this.lines = changedLines;
  }

}
