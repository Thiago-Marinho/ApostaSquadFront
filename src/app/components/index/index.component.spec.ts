import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#Create - Deve criar um component do index', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O HTML deve conter um titulo', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title')
    let expected: string = 'Bem-vindo ao sitema de apostas do Squad!'
    let result: string = title.innerHTML

    expect(result).toBe(expected)
  })
});
