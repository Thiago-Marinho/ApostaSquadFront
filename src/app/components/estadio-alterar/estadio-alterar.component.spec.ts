import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadioAlterarComponent } from './estadio-alterar.component';

describe('EstadioAlterarComponent', () => {
  let component: EstadioAlterarComponent;
  let fixture: ComponentFixture<EstadioAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadioAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadioAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
