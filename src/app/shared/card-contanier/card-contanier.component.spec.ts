import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContanierComponent } from './card-contanier.component';

describe('CardContanierComponent', () => {
  let component: CardContanierComponent;
  let fixture: ComponentFixture<CardContanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContanierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
