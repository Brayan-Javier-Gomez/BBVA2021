import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFlujosComponent } from './estado-flujos.component';

describe('EstadoFlujosComponent', () => {
  let component: EstadoFlujosComponent;
  let fixture: ComponentFixture<EstadoFlujosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoFlujosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoFlujosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
