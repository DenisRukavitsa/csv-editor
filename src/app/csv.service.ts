import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SettingsService } from './settings/settings.service';

@Injectable()
export class CsvService {
  lineChanges = new Subject<{line: number; data: Array<string>}>();
  textChanges = new Subject<Array<Array<string>>>();
  tableChanges = new Subject<string>();
  csvUploaded = new Subject<string>();
  loading = new Subject<boolean>();
  private updatedLines = [];
  private lines = [];
  private csvText = '';
  private lineSeparator = '\n';
  private valueSeparator = ',';
  private stringTerminator = '';

  constructor(settingsService: SettingsService) {
    settingsService.settings.subscribe(settings => {
      this.valueSeparator = settings.separator === 'Comma' ? ',' : '\t';
      switch (settings.stringTerminator) {
        case 'None':
          this.stringTerminator = '';
          break;
        case 'Double quote':
          this.stringTerminator = '"';
          break;
        case 'Single quote':
          this.stringTerminator = '\'';
          break;
        default:
          this.stringTerminator = '';
      }

      this.fullParse();
    });
  }

  parseCsv(csv: string): void {
    this.csvText = csv.trim();
    this.lineSeparator = '\n';
    const changedLines = this.csvText.split('\n');

    if (changedLines.length !== this.lines.length) {
      this.fullParse();
    } else {
      this.changeLine(changedLines);
    }
  }

  fileUploaded(file: string) {
    this.csvUploaded.next(file);
    this.csvText = file.trim();

    if (file.includes('\n')) {
      this.lineSeparator = '\n';
      this.fullParse();
    } else {
      this.lineSeparator = '\r';
      this.fullParse();
    }
  }

  cellChange(row: number, column: number, newValue: string) {
    this.updatedLines.push(row);

    const lineToChange = this.parseLine(this.lines[row]);
    const changedLine = [...lineToChange.slice(0, column),
                         newValue,
                         ...lineToChange.slice(column + 1, lineToChange.length)];
    this.lines[row] = changedLine.join(this.valueSeparator);
    this.tableChanges.next(this.lines.join(this.lineSeparator));
  }

  getTableUpdates() {
    this.updatedLines.forEach(updatedLine => {
      this.lineChanges.next({line: updatedLine,
        data: this.parseLine(this.lines[updatedLine])});
    });
    this.updatedLines = [];
  }

  private fullParse() {
    this.loading.next(true);
    const splittedLines = [];
    this.lines = this.csvText.split(this.lineSeparator);

    this.lines.forEach((line: string) => {
      splittedLines.push(this.parseLine(line));
    });
    this.textChanges.next(splittedLines);
    this.loading.next(false);
  }

  private changeLine(changedLines: Array<string>) {
    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i] !== changedLines[i]) {
        this.lineChanges.next({line: i, data: this.parseLine(changedLines[i])});
        break;
      }
    }
    this.lines = changedLines;
  }

  private parseLine(line: string): string[] {
    if (this.stringTerminator && line.includes(this.stringTerminator)) {
      const values = [];
      let str = '';
      let insideString = false;

      line.split('').forEach((letter, index) => {
        if (letter === this.valueSeparator && !insideString) {
          values.push(str);
          str = '';
          return;
        }

        if (index === line.length - 1) {
          str += letter;
          values.push(str);
          return;
        }

        if (letter === this.stringTerminator && !insideString) {
          insideString = true;
          str += letter;
          return;
        }

        if (letter === this.stringTerminator && insideString) {
          insideString = false;
          str += letter;
          return;
        }

        str += letter;
      });

      return values;
    } else {
      return line.split(this.valueSeparator);
    }
  }

}
