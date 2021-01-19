import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedTimeComponent } from './formatted-time.component';

describe('FormattedTimeComponent', () => {
  let component: FormattedTimeComponent;
  let fixture: ComponentFixture<FormattedTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattedTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
