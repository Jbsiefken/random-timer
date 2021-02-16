import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarktimerComponent } from './darktimer.component';

describe('DarktimerComponent', () => {
  let component: DarktimerComponent;
  let fixture: ComponentFixture<DarktimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarktimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarktimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
