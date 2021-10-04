import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePartidaAlterarComponent } from './time-partida-alterar.component';

describe('TimePartidaAlterarComponent', () => {
  let component: TimePartidaAlterarComponent;
  let fixture: ComponentFixture<TimePartidaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePartidaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePartidaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
