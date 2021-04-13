import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowThemeComponent } from './table-row-theme.component';

describe('TableRowThemeComponent', () => {
  let component: TableRowThemeComponent;
  let fixture: ComponentFixture<TableRowThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
