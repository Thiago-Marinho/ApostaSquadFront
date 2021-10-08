import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeService } from './../../services/time.service';
import { TimeAlterarComponent } from './time-alterar.component';

describe('TimeAlterarComponent', () => {

  let component: TimeAlterarComponent;
  let fixture: ComponentFixture<TimeAlterarComponent>;
  let h1: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      providers: [TimeService],
      declarations: [ TimeAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });


  it('#Title - O titulo deve constar no html', () => {

    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#title");

    let expected: string = "Alterar time do";
    let result: string = h1.innerHTML

    expect(result).toContain(expected);

  });

  it('#BotaoSalvar - Deve aparecer no html', () => {
    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#salvar");

    let expected: string = "Salvar";
    let result: string = h1.innerHTML

    expect(result).toContain(expected);
  });


});
