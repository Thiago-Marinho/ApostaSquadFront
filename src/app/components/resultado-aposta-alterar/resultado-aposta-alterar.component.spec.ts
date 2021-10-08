import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ResultadoApostaAlterarComponent } from './resultado-aposta-alterar.component';

describe('ResultadoApostaAlterarComponent', () => {
  let component: ResultadoApostaAlterarComponent;
  let fixture: ComponentFixture<ResultadoApostaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ ResultadoApostaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoApostaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - Deve criar um component de ResultadoApostaAlterar', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O HTML deve conter um titulo', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title')
    let expected: string = 'Alterar ResultadoAposta'
    let result: string = title.innerHTML

    expect(result).toBe(expected)
  })
});
