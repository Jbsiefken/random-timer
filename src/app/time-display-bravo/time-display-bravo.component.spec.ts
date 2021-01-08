import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayBravoComponent } from './time-display-bravo.component';

describe('TimeDisplayBravoComponent', () => {
  let component: TimeDisplayBravoComponent;
  let fixture: ComponentFixture<TimeDisplayBravoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDisplayBravoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisplayBravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
