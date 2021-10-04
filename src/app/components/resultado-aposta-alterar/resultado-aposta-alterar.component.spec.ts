import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoApostaAlterarComponent } from './resultado-aposta-alterar.component';

describe('ResultadoApostaAlterarComponent', () => {
  let component: ResultadoApostaAlterarComponent;
  let fixture: ComponentFixture<ResultadoApostaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoApostaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoApostaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
