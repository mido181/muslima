import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterestComponent } from './my-interest.component';

describe('MyInterestComponent', () => {
  let component: MyInterestComponent;
  let fixture: ComponentFixture<MyInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
