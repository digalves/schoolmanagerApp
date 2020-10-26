import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaRegisterComponent } from './turma-register.component';

describe('TurmaRegisterComponent', () => {
  let component: TurmaRegisterComponent;
  let fixture: ComponentFixture<TurmaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
