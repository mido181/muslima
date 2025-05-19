import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMsgsComponent } from './favorite-msgs.component';

describe('FavoriteMsgsComponent', () => {
  let component: FavoriteMsgsComponent;
  let fixture: ComponentFixture<FavoriteMsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMsgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
