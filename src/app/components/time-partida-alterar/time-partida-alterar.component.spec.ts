import { HttpClientTestingModule } from '@angular/common/http/testing';
import { identifierModuleUrl } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from 'src/app/services/cliente.service';
import { TimePartidaService } from 'src/app/services/time-partida.service';

import { TimePartidaAlterarComponent } from './time-partida-alterar.component';

describe('TimePartidaAlterarComponent', () => {
  let component: TimePartidaAlterarComponent;
  let fixture: ComponentFixture<TimePartidaAlterarComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      providers : [TimePartidaService, FormBuilder], 
      declarations : [ TimePartidaAlterarComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TimePartidaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    
    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#title");

    let expected: string = "Atualizar Relação entre time e partida do";
    let result: string = h1.innerHTML

    expect(result).toContain(expected);
  }); 
});
