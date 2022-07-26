import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDomicilioComponent } from './registrar-domicilio.component';

describe('RegistrarDomicilioComponent', () => {
  let component: RegistrarDomicilioComponent;
  let fixture: ComponentFixture<RegistrarDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
