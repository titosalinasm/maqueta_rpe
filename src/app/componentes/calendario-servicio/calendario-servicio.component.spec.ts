import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioServicioComponent } from './calendario-servicio.component';

describe('CalendarioServicioComponent', () => {
  let component: CalendarioServicioComponent;
  let fixture: ComponentFixture<CalendarioServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
