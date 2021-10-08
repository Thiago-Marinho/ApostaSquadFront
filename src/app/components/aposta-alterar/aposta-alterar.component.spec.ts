import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApostaService } from 'src/app/services/aposta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PartidaService } from 'src/app/services/partida.service';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';
import { SituacaoService } from 'src/app/services/situacao.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

import { ApostaAlterarComponent } from './aposta-alterar.component';

describe('ApostaAlterarComponent', () => {
  let component: ApostaAlterarComponent;
  let fixture: ComponentFixture<ApostaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ApostaService, 
        SituacaoService, 
        ClienteService,
        PartidaService,
        TimeService,
        TimePartidaService,
        ResultadoApostaService,
        FormBuilder
      ],
      declarations: [ ApostaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve ser criado', () => {
    const app = fixture.debugElement.nativeElement
    let h1 = app.querySelector('#title')
    let expected: string = "Alterar aposta do"
    let result: string = h1.innerHTML

    expect(result).toContain(expected)
  })

  it('#BotaoSalvar - Deve aparecer no html', () => {
    const app = fixture.debugElement.nativeElement
    let button = app.querySelector('#salvar')
    let expected: string = "Salvar"
    let result: string = button.innerHTML

    expect(result).toContain(expected)
  })
});
