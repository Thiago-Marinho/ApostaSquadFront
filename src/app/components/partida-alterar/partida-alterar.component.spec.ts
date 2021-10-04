import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaAlterarComponent } from './partida-alterar.component';

describe('PartidaAlterarComponent', () => {
  let component: PartidaAlterarComponent;
  let fixture: ComponentFixture<PartidaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
