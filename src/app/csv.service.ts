import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CsvService {
  splittedLines: Array<Array<string>>;
  tableChanges = new Subject<string>();
  private lines: Array<String>;

  parseCsv(csv: string): void {
    csv = csv.trim();
    if (!this.splittedLines) {
      this.fullParse(csv);
    } else {
      const changedLines = csv.split('\n');
      if (changedLines.length !== this.lines.length) {
        this.fullParse(csv);
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
    this.tableChanges.next(this.lines.join('\n'));
  }

  private fullParse(csv: string) {
    this.splittedLines = [];
    this.lines = csv.split('\n');
    this.lines.forEach((line) => {
      this.splittedLines.push(line.split(','));
    });
  }

  private changeLine(changedLines: Array<string>) {
    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i] !== changedLines[i]) {
        this.splittedLines.splice(i, 1, changedLines[i].split(','));
        break;
      }
    }
    this.lines = changedLines;
  }

}
