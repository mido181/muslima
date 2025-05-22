import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMangementComponent } from './profile-mangement.component';

describe('ProfileMangementComponent', () => {
  let component: ProfileMangementComponent;
  let fixture: ComponentFixture<ProfileMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
