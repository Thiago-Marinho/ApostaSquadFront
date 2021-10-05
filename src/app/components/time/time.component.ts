import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Time } from 'src/app/entities/time';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  boolPostForm: boolean = false
  time: Time = {nome:""}
  times: Time[] = []

  form: FormGroup

  constructor(private timeService: TimeService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      nome: ['', [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }
  onSubmit(){
    this.timeService.incluir(this.time).subscribe(resp => this.listar())
    this.hidePostForm()
    
  }

  listar(): void
  {
    this.timeService.listar().subscribe(resp => this.times = resp)
  }

}
