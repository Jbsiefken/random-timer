import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Status } from '../Status';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  //important variables
  minTime: number;
  maxTime: number;
  minHrs: number = 0;
  minMin: number = 0;
  minSec: number = 0;
  maxHrs: number = 0;
  maxMin: number = 0;
  maxSec: number = 0;
  reps: number = 1;
  running: boolean = false;
  message: string;
  status: Status = Status.off;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  fixBigNumbers(): void {
  }

  //when the button is clicked, convert inputs to milliseconds
  //make sure minTime is less than maxTime
  //if it passes, run the timer
  startButton(): void {

    if (this.running == false){
      this.minTime = this.getTimeValue(this.minHrs, this.minMin, this.minSec);
      this.maxTime = this.getTimeValue(this.maxHrs, this.maxMin, this.maxSec);
      if (this.minTime > this.maxTime){
        this.message = "The minimum time is greater than the maximum time!";
      }
      else {
        this.runTimer();
      }
    }
  }

  //Pause button
  pauseButton(){
    this.status = Status.paused;
  }

  stopButton(){
    clearInterval(this.interval);
    this.status = Status.off;
    this.running = false;
  }

  //this one will convert hours, minutes, and seconds
  //to a number of milliseconds
  getTimeValue(hrs: number, min: number, sec: number): number {
    let total: number = 0;
    total += hrs*3600000;
    total += min*60000;
    total += sec*1000;
    return total;
  }

  //for range of this.reps
  //create a random number between min and max time
  //set the timer off after that number of milliseconds
  runTimer(): void {
    this.running = true;
    this.status = Status.on;
    this.message = '';
    this.runInterval(this.reps);

  }

  runInterval(reps: number): void {
    console.log("runInterval() called")
    if (reps == 0){
      this.message = "boop";
      this.running = false;
      this.status = Status.off;
      return;
    }
    let _interval: number = Math.floor(Math.random() * (this.maxTime - this.minTime)) + this.minTime;
    console.log(`${_interval}`);
    this.interval = setTimeout(() => {
      this.message = `Interval ${this.reps - reps + 1} complete`;
      this.runInterval(reps-1);
      return;
    }, _interval);
  }


}
