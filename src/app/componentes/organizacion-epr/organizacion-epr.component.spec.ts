import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionEprComponent } from './organizacion-epr.component';

describe('OrganizacionEprComponent', () => {
  let component: OrganizacionEprComponent;
  let fixture: ComponentFixture<OrganizacionEprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionEprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionEprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
