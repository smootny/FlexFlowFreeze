import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterIntakeCalculatorComponent } from './water-intake-calculator.component';

describe('WaterIntakeCalculatorComponent', () => {
  let component: WaterIntakeCalculatorComponent;
  let fixture: ComponentFixture<WaterIntakeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterIntakeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterIntakeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
