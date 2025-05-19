import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualInterestComponent } from './mutual-interest.component';

describe('MutualInterestComponent', () => {
  let component: MutualInterestComponent;
  let fixture: ComponentFixture<MutualInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
