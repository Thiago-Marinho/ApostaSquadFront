import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EstadioAlterarComponent } from './estadio-alterar.component';

describe('EstadioAlterarComponent', () => {
  let component: EstadioAlterarComponent;
  let fixture: ComponentFixture<EstadioAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ EstadioAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadioAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - Deve criar um component de estadio-alterar', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O HTML deve conter um título', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title')
    let expected: string = 'Alterar estadio do id:'
    let result: string = title.innerHTML

    expect(result).toContain(expected)
  })
});
