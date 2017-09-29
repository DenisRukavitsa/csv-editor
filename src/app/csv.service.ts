import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CsvService {
  splittedLines: Array<Array<string>>;
  splittedLinesSubject = new Subject<Array<Array<string>>>();
  tableChanges = new Subject<string>();
  private csv: string;
  private lines: Array<string>;

  parseCsv(csv: string): void {
    this.csv = csv.trim();
    if (!this.splittedLines) {
      this.fullParse();
    } else {
      const changedLines = this.csv.split('\n');
      if (changedLines.length !== this.lines.length) {
        this.fullParse();
      } else {
        this.changeLine(changedLines);
      }
    }
  }

  cellChange(row: number, column: number, newValue: string) {
    const lineToChange = this.lines[row].split(',');
    const changedLine = [...lineToChange.slice(0, column),
                         newValue,
                         ...lineToChange.slice(column + 1, lineToChange.length)];
    this.lines[row] = changedLine.join(',');
    this.csv = this.lines.join('\n');
    this.tableChanges.next(this.csv);
  }

  fullParse() {
    this.splittedLines = [];
    this.lines = this.csv.split('\n');
    this.lines.forEach((line) => {
      this.splittedLines.push(line.split(','));
    });

    this.splittedLinesSubject.next(this.splittedLines);
  }

  private changeLine(changedLines: Array<string>) {
    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i] !== changedLines[i]) {
        this.splittedLines.splice(i, 1, changedLines[i].split(','));
        break;
      }
    }
    this.lines = changedLines;

    this.splittedLinesSubject.next(this.splittedLines);
  }

}
