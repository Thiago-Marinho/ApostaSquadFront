import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostaAlterarComponent } from './aposta-alterar.component';

describe('ApostaAlterarComponent', () => {
  let component: ApostaAlterarComponent;
  let fixture: ComponentFixture<ApostaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApostaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
