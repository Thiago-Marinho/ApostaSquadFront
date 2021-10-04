import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoAlterarComponent } from './situacao-alterar.component';

describe('SituacaoAlterarComponent', () => {
  let component: SituacaoAlterarComponent;
  let fixture: ComponentFixture<SituacaoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacaoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
