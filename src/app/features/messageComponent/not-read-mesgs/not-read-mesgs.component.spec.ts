import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReadMesgsComponent } from './not-read-mesgs.component';

describe('NotReadMesgsComponent', () => {
  let component: NotReadMesgsComponent;
  let fixture: ComponentFixture<NotReadMesgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotReadMesgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotReadMesgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
