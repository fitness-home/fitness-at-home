import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Survey5Component } from './survey5.component';

describe('Survey4Component', () => {
  let component: Survey5Component;
  let fixture: ComponentFixture<Survey5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Survey5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Survey5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
