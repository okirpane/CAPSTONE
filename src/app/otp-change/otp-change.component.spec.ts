import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpChangeComponent } from './otp-change.component';

describe('OtpChangeComponent', () => {
  let component: OtpChangeComponent;
  let fixture: ComponentFixture<OtpChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
