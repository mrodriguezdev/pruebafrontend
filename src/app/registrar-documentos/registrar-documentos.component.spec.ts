import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDocumentosComponent } from './registrar-documentos.component';

describe('RegistrarDocumentosComponent', () => {
  let component: RegistrarDocumentosComponent;
  let fixture: ComponentFixture<RegistrarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
