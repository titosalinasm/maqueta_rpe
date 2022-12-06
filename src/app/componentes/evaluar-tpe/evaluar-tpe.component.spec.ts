import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarTpeComponent } from './evaluar-tpe.component';

describe('EvaluarTpeComponent', () => {
  let component: EvaluarTpeComponent;
  let fixture: ComponentFixture<EvaluarTpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarTpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluarTpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
