import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceGeneralComponent } from './balance-general.component';

describe('BalanceGeneralComponent', () => {
  let component: BalanceGeneralComponent;
  let fixture: ComponentFixture<BalanceGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
