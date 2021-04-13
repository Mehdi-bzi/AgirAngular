import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationEditViewComponent } from './formation-edit-view.component';

describe('FormationEditViewComponent', () => {
  let component: FormationEditViewComponent;
  let fixture: ComponentFixture<FormationEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
