import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComparisonComponent } from './image-comparison.component';

describe('ImageComparisonComponent', () => {
  let component: ImageComparisonComponent;
  let fixture: ComponentFixture<ImageComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
