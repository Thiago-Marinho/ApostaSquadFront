import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from './../../services/cliente.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteAlterarComponent } from './cliente-alterar.component';

describe('ClienteAlterarComponent', () => {

  let component: ClienteAlterarComponent;
  let fixture: ComponentFixture<ClienteAlterarComponent>;
  let h1: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      providers: [ClienteService],
      declarations: [ ClienteAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });


  it('#Title - O titulo deve constar no html', () => {

    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#title");

    let expected: string = "Alterar cliente do";
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
