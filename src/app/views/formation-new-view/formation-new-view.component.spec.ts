import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationNewViewComponent } from './formation-new-view.component';

describe('FormationNewViewComponent', () => {
  let component: FormationNewViewComponent;
  let fixture: ComponentFixture<FormationNewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationNewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
