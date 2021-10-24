import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVariacionesComponent } from './estado-variaciones.component';

describe('EstadoVariacionesComponent', () => {
  let component: EstadoVariacionesComponent;
  let fixture: ComponentFixture<EstadoVariacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoVariacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoVariacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
