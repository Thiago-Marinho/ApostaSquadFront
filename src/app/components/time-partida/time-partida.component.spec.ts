import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePartidaComponent } from './time-partida.component';

describe('TimePartidaComponent', () => {
  let component: TimePartidaComponent;
  let fixture: ComponentFixture<TimePartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
