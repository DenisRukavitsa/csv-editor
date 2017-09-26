import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvTableCellComponent } from './csv-table-cell.component';

describe('CsvTableCellComponent', () => {
  let component: CsvTableCellComponent;
  let fixture: ComponentFixture<CsvTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
