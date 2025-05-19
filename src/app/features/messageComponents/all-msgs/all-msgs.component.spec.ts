import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMsgsComponent } from './all-msgs.component';

describe('AllMsgsComponent', () => {
  let component: AllMsgsComponent;
  let fixture: ComponentFixture<AllMsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMsgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
