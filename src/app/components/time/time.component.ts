import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/entities/time';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  boolPostForm: boolean = false
  time: Time | undefined
  times: Time[] = []

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(){
    
  }

  listar(): void
  {
    this.timeService.listar().subscribe(resp => this.times = resp)
  }

}
