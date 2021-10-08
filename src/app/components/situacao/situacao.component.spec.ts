import { SituacaoService } from './../../services/situacao.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoComponent } from './situacao.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SituacaoComponent', () => {
  let component: SituacaoComponent;
  let fixture: ComponentFixture<SituacaoComponent>;
  let title: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SituacaoService, FormBuilder],
      declarations: [ SituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('#Title - O titulo deve constar no html', () => {

    const app = fixture.debugElement.nativeElement;
    title = app.querySelector("#title");

    let expected: string = "Situação";
    let result: string = title.innerHTML

    expect(result).toContain(expected);

  });

});
