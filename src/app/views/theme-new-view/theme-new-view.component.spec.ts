import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNewViewComponent } from './theme-new-view.component';

describe('ThemeNewViewComponent', () => {
  let component: ThemeNewViewComponent;
  let fixture: ComponentFixture<ThemeNewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeNewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
