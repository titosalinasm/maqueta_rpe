import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarPostulacionDsComponent } from './evaluar-postulacion-ds.component';

describe('EvaluarPostulacionDsComponent', () => {
  let component: EvaluarPostulacionDsComponent;
  let fixture: ComponentFixture<EvaluarPostulacionDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarPostulacionDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluarPostulacionDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
