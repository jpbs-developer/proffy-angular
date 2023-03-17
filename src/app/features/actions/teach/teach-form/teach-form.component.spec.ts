import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachFormComponent } from './teach-form.component';

describe('TeachFormComponent', () => {
  let component: TeachFormComponent;
  let fixture: ComponentFixture<TeachFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TeachFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
