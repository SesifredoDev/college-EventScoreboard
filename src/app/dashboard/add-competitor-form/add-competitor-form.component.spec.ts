import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitorFormComponent } from './add-competitor-form.component';

describe('AddCompetitorFormComponent', () => {
  let component: AddCompetitorFormComponent;
  let fixture: ComponentFixture<AddCompetitorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetitorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetitorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
