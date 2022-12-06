import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetComponent } from './login-extranet.component';

describe('LoginExtranetComponent', () => {
  let component: LoginExtranetComponent;
  let fixture: ComponentFixture<LoginExtranetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginExtranetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginExtranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
