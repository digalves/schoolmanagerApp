import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaRegisterComponent } from './escola-register.component';

describe('EscolaRegisterComponent', () => {
  let component: EscolaRegisterComponent;
  let fixture: ComponentFixture<EscolaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
