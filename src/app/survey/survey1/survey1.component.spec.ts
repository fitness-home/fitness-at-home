import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Survey1Component } from './survey1.component';

describe('Survey1Component', () => {
  let component: Survey1Component;
  let fixture: ComponentFixture<Survey1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Survey1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Survey1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
