import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from 'src/app/entities/time';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time-alterar',
  templateUrl: './time-alterar.component.html',
  styleUrls: ['./time-alterar.component.css']
})
export class TimeAlterarComponent implements OnInit {

  time: Time = {
    id: 0,
    nome: ""
  }

  constructor(private route: ActivatedRoute, private timeService: TimeService, private location: Location) { }

  ngOnInit(): void {
    this.carregarTime()
  }

  carregarTime(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.timeService.carregarTime(id).subscribe(resp => this.time = resp)
  }

  alterar(): void {
    if(this.time) {
      this.timeService.alterar(this.time).subscribe(resp => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
