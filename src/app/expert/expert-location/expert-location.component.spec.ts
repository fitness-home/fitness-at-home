import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLocationComponent } from './expert-location.component';

describe('ExpertLocationComponent', () => {
  let component: ExpertLocationComponent;
  let fixture: ComponentFixture<ExpertLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
