import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceInfoComponent } from './clearance-info.component';

describe('ClearanceInfoComponent', () => {
  let component: ClearanceInfoComponent;
  let fixture: ComponentFixture<ClearanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearanceInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
