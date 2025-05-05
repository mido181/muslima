import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCircleComponent } from './border-circle.component';

describe('BorderCircleComponent', () => {
  let component: BorderCircleComponent;
  let fixture: ComponentFixture<BorderCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
