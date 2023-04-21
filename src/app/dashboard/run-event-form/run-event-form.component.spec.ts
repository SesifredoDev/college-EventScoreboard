import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunEventFormComponent } from './run-event-form.component';

describe('RunEventFormComponent', () => {
  let component: RunEventFormComponent;
  let fixture: ComponentFixture<RunEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunEventFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
