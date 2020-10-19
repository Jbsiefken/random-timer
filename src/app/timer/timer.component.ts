import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minTime: number;
  maxTime: number;
  minHrs: number = 0;
  minMin: number = 0;
  minSec: number = 0;
  maxHrs: number = 0;
  maxMin: number = 0;
  maxSec: number = 0;
  interval: number;
  running: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(): void {

    if (this.running == false){
    }
  }

  getTimeValue(hrs: number, min: number, sec: number): void {

  }

}
