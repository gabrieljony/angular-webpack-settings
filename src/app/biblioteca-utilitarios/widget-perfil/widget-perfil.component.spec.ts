import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPerfilComponent } from './widget-perfil.component';

describe('WidgetPerfilComponent', () => {
  let component: WidgetPerfilComponent;
  let fixture: ComponentFixture<WidgetPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
