import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaUtilitariosComponent } from './biblioteca-utilitarios.component';

describe('BibliotecaUtilitariosComponent', () => {
  let component: BibliotecaUtilitariosComponent;
  let fixture: ComponentFixture<BibliotecaUtilitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaUtilitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaUtilitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
