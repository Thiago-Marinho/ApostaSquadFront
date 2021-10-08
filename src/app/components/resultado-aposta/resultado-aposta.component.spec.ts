import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';

import { ResultadoApostaComponent } from './resultado-aposta.component';

describe('ResultadoApostaComponent', () => {
  let component: ResultadoApostaComponent;
  let fixture: ComponentFixture<ResultadoApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResultadoApostaService, FormBuilder],
      declarations: [ ResultadoApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - Deve criar um component de ResultadoAposta', () => {
    expect(component).toBeTruthy();
  });
});
