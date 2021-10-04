import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAlterarComponent } from './time-alterar.component';

describe('TimeAlterarComponent', () => {
  let component: TimeAlterarComponent;
  let fixture: ComponentFixture<TimeAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
