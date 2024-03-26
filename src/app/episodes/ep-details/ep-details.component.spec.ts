import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpDetailsComponent } from './ep-details.component';

describe('EpDetailsComponent', () => {
  let component: EpDetailsComponent;
  let fixture: ComponentFixture<EpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
