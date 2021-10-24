import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoResultadosComponent } from './estado-resultados.component';

describe('EstadoResultadosComponent', () => {
  let component: EstadoResultadosComponent;
  let fixture: ComponentFixture<EstadoResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
