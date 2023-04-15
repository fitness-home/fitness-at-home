import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlangeneratorComponent } from './plangenerator.component';

describe('PlangeneratorComponent', () => {
  let component: PlangeneratorComponent;
  let fixture: ComponentFixture<PlangeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlangeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlangeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
