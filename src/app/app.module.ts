import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvTextComponent } from './csv-text/csv-text.component';
import {CsvService} from './csv.service';
import { CsvTableComponent } from './csv-table/csv-table.component';
import { CsvTableCellComponent } from './csv-table-cell/csv-table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvTextComponent,
    CsvTableComponent,
    CsvTableCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
