import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosCarteraComponent } from './movimientos-cartera.component';

describe('MovimientosCarteraComponent', () => {
  let component: MovimientosCarteraComponent;
  let fixture: ComponentFixture<MovimientosCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosCarteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
