import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeficienteCoberturaComponent } from './coeficiente-cobertura.component';

describe('CoeficienteCoberturaComponent', () => {
  let component: CoeficienteCoberturaComponent;
  let fixture: ComponentFixture<CoeficienteCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeficienteCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeficienteCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
