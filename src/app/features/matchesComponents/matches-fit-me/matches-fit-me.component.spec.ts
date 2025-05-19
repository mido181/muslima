import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesFitMeComponent } from './matches-fit-me.component';

describe('MatchesFitMeComponent', () => {
  let component: MatchesFitMeComponent;
  let fixture: ComponentFixture<MatchesFitMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesFitMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesFitMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
