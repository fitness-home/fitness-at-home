import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpertComponent } from './admin-expert.component';

describe('AdminExpertComponent', () => {
  let component: AdminExpertComponent;
  let fixture: ComponentFixture<AdminExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
