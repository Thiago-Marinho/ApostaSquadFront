import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartidaComponent } from './partida.component';
import { EstadioService } from 'src/app/services/estadio.service';
import { PartidaService } from 'src/app/services/partida.service';

import { FormBuilder, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('PartidaComponent', () => {
  let component: PartidaComponent;
  let fixture: ComponentFixture<PartidaComponent>;
  let h1: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PartidaService, EstadioService, FormBuilder],
      declarations: [ PartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - O componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve constar no html', () => {
    const app = fixture.debugElement.nativeElement;
    const title = app.querySelector('#title')

    expect(title.innerHTML).toContain("Listar Partidas")
  });
});
