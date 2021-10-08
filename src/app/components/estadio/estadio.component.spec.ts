import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { EstadioService } from 'src/app/services/estadio.service';

import { EstadioComponent } from './estadio.component';

describe('EstadioComponent', () => {
  let component: EstadioComponent;
  let fixture: ComponentFixture<EstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EstadioService, FormBuilder ],
      declarations: [ EstadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - Deve criar um component de estádio', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O HTML deve conter um titulo', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title')
    let expected: string = "Lista de estádios"
    let result: string = title.innerHTML
    
    expect(result).toBe(expected)
  });

});
