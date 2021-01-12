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
  total_reps: number = 1;
  remaining_reps: number = 1;
  elapsed_time: number = 0;
  start_time: number;
  message: string;
  status: Status = Status.off;
  timeout: any;
  update_time: any;

  constructor() { }

  ngOnInit(): void {
  }

  fixBigNumbers(): void {
  }

  //when the button is clicked, convert inputs to milliseconds
  //make sure minTime is less than maxTime
  //if it passes, run the timer
  startButton(): void {
    
    if (this.status != Status.on){
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
    clearInterval(this.update_time);
    clearTimeout(this.timeout);
  }

  stopButton(){
    clearTimeout(this.timeout);
    clearInterval(this.update_time);
    this.status = Status.off;
    this.elapsed_time = 0;
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
    if(this.status == Status.off){
      this.remaining_reps = this.total_reps;
    }
    else if(this.status == Status.on){
      this.elapsed_time = 0;
    }
    this.status = Status.on;
    this.message = '';
    this.start_time = Date.now() - this.elapsed_time;
    this.runInterval(this.remaining_reps);
  }

  runInterval(reps: number): void {
    this.remaining_reps = reps;
    clearInterval(this.update_time);
    clearTimeout(this.timeout);
    if (reps == 0){
      this.message = "boop";
      this.stopButton();
      return;
    }
    let thas = this;
    let interval: number = Math.floor(Math.random() * (this.maxTime - this.minTime)) + this.minTime;
    console.log(`${interval}`);
    this.update_time = setInterval(() => {
      this.elapsed_time = Date.now() - this.start_time;
    }, 1);
    this.timeout = setTimeout(() => {
      this.message = `Interval ${this.total_reps - reps + 1} complete`;
      console.log("interval complete");
      this.remaining_reps -= 1;
      this.runTimer();
      return;
    }, interval-this.elapsed_time);
  }

}
