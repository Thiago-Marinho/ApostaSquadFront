import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SituacaoService } from './../../services/situacao.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacaoAlterarComponent } from './situacao-alterar.component';

describe('SituacaoAlterarComponent', () => {

  let component: SituacaoAlterarComponent;
  let fixture: ComponentFixture<SituacaoAlterarComponent>;
  let h1: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      providers: [SituacaoService],
      declarations: [ SituacaoAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    const app = fixture.debugElement.nativeElement;
    h1 = app.querySelector("#title");
    let expected: string = "Alterar situação do";
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
