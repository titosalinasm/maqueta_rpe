import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProductivoComponent } from './test-productivo.component';

describe('TestProductivoComponent', () => {
  let component: TestProductivoComponent;
  let fixture: ComponentFixture<TestProductivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProductivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestProductivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
