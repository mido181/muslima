import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesContanierComponent } from './messages-contanier.component';

describe('MessagesContanierComponent', () => {
  let component: MessagesContanierComponent;
  let fixture: ComponentFixture<MessagesContanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesContanierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesContanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
