import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPageTwoComponent } from './bank-page-two.component';

describe('BankPageTwoComponent', () => {
  let component: BankPageTwoComponent;
  let fixture: ComponentFixture<BankPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
