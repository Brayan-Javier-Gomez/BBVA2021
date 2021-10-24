import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasOrdenComponent } from './cuentas-orden.component';

describe('CuentasOrdenComponent', () => {
  let component: CuentasOrdenComponent;
  let fixture: ComponentFixture<CuentasOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
