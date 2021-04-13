import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowFormationComponent } from './table-row-formation.component';

describe('TableRowFormationComponent', () => {
  let component: TableRowFormationComponent;
  let fixture: ComponentFixture<TableRowFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
