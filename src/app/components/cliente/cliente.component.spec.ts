import { ClienteService } from './../../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteComponent } from './cliente.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ClienteService, FormBuilder],
      declarations: [ ClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('#title deve ter quele titulo', () => {
    const app: DebugElement = fixture.debugElement;
    const title= app.query(By.css('h1'));
    const titleElement: HTMLElement = title.nativeElement;
    expect(titleElement.textContent).toContain('Listar Clientes');
  });


});
