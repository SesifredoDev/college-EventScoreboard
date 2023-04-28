import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamBoxComponent } from './add-team-box.component';

describe('AddTeamBoxComponent', () => {
  let component: AddTeamBoxComponent;
  let fixture: ComponentFixture<AddTeamBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
