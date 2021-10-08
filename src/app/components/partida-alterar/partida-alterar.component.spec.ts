import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from './../../services/cliente.service';
import { PartidaAlterarComponent } from './partida-alterar.component';
import { PartidaService } from 'src/app/services/partida.service';
import { EstadioService } from 'src/app/services/estadio.service';

describe('PartidaAlterarComponent', () => {
  let component: PartidaAlterarComponent;
  let fixture: ComponentFixture<PartidaAlterarComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      providers: [PartidaService, EstadioService],
      declarations: [ PartidaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });


  it('#Title - O titulo deve constar no html', () => {

    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#title");

    let expected: string = "Alterar partida do";
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
