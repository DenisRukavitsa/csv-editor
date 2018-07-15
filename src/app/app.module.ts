import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CsvTextComponent } from './csv-text/csv-text.component';
import { CsvService } from './csv.service';
import { SettingsService } from './settings/settings.service';
import { CsvTableComponent } from './csv-table/csv-table.component';
import { CsvTableCellComponent } from './csv-table-cell/csv-table-cell.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvTextComponent,
    CsvTableComponent,
    CsvTableCellComponent,
    HeaderComponent,
    AboutComponent,
    SettingsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CsvService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
