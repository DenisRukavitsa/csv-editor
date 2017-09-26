import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvTextComponent } from './csv-text.component';

describe('CsvTextComponent', () => {
  let component: CsvTextComponent;
  let fixture: ComponentFixture<CsvTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
