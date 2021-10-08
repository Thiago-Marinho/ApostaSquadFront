import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeService } from 'src/app/services/time.service';
import {Time} from 'src/app/entities/time'

import { TimeComponent } from './time.component';
import { Observable, Subscriber } from 'rxjs';

const timesMock:Time[] = [{id:1,nome:"Corinthians"}]

class MockTimeService {
  times:Time[] =timesMock
  listar():Observable<Time[]>{
    return new Observable(
      subscriber =>{
        subscriber.next(this.times)
        subscriber.complete()
      }
    )
  }
}

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComponent ],
      providers: [{provide:TimeService, useClass:MockTimeService}],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('#TimeComponent deve ser criado', () => {
    expect(component).toBeTruthy();
  });
  it('#times deve conter as informações passadas pelo service',()=>{
    component.ngOnInit()
    expect(component.times).toEqual(timesMock)
  })
  it("#title deve ter sido reenderizado de maneira correta, dentro do HTML", ()=>{
    const app = fixture.debugElement.nativeElement;
    const title = app.querySelector('#title')
    expect(title.innerHTML).toContain("Listar time")
  })
});
