import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ApostaService } from 'src/app/services/aposta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PartidaService } from 'src/app/services/partida.service';
import { ResultadoApostaService } from 'src/app/services/resultado-aposta.service';
import { SituacaoService } from 'src/app/services/situacao.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';
import { TimeService } from 'src/app/services/time.service';

import { ApostaComponent } from './aposta.component';

describe('ApostaComponent', () => {
  let component: ApostaComponent;
  let fixture: ComponentFixture<ApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
      declarations: [ ApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - deve ter um titulo', () =>{
    const app: DebugElement = fixture.debugElement;
    const title = app.query(By.css('h1'));
    const titleElement: HTMLElement = title.nativeElement
    expect(titleElement.textContent).toContain('Listar Apostas')
  });
});
