import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierDetectionComponent } from './courier-detection.component';

describe('CourierDetectionComponent', () => {
  let component: CourierDetectionComponent;
  let fixture: ComponentFixture<CourierDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourierDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourierDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
