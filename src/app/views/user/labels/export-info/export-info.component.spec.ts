import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportInfoComponent } from './export-info.component';

describe('ExportInfoComponent', () => {
  let component: ExportInfoComponent;
  let fixture: ComponentFixture<ExportInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
