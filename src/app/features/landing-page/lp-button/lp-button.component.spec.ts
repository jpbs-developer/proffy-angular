import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpButtonComponent } from './lp-button.component';

describe('LpButtonComponent', () => {
  let component: LpButtonComponent;
  let fixture: ComponentFixture<LpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LpButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
