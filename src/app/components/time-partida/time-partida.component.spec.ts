import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TimePartidaService } from 'src/app/services/time-partida.service';

import { TimePartidaComponent } from './time-partida.component';

describe('TimePartidaComponent', () => {
  let component: TimePartidaComponent;
  let fixture: ComponentFixture<TimePartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TimePartidaService, FormBuilder],
      declarations: [ TimePartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#title deve ter aquele titulo', () => {
    const app: DebugElement = fixture.debugElement;
    const title = app.query(By.css('h1'));
    const titleElement: HTMLElement = title.nativeElement;
    expect(titleElement.textContent).toContain('Lista de timePartida')
  });
});
