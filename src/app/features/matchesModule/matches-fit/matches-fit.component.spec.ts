import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesFitComponent } from './matches-fit.component';

describe('MatchesFitComponent', () => {
  let component: MatchesFitComponent;
  let fixture: ComponentFixture<MatchesFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
