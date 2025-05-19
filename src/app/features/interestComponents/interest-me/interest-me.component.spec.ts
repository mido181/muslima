import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestMeComponent } from './interest-me.component';

describe('InterestMeComponent', () => {
  let component: InterestMeComponent;
  let fixture: ComponentFixture<InterestMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
