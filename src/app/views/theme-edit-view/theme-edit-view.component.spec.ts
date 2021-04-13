import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeEditViewComponent } from './theme-edit-view.component';

describe('ThemeEditViewComponent', () => {
  let component: ThemeEditViewComponent;
  let fixture: ComponentFixture<ThemeEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
