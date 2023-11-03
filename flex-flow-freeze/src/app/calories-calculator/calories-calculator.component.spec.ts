import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesCalculatorComponent } from './calories-calculator.component';

describe('CaloriesCalculatorComponent', () => {
  let component: CaloriesCalculatorComponent;
  let fixture: ComponentFixture<CaloriesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaloriesCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaloriesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
