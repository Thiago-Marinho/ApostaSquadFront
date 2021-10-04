import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoApostaComponent } from './resultado-aposta.component';

describe('ResultadoApostaComponent', () => {
  let component: ResultadoApostaComponent;
  let fixture: ComponentFixture<ResultadoApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
