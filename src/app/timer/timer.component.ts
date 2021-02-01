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
  //min and max time converted to units
  minHrs: number = 0;
  minMin: number = 0;
  minSec: number = 0;
  maxHrs: number = 0;
  maxMin: number = 0;
  maxSec: number = 0;
  //# of times the timer will run
  total_reps: number = 1;
  remaining_reps: number = 1;

  //used for updating display
  elapsed_time: number = 0;
  start_time: number;
  result: number;
  timeout: any;
  update_time: any;
  status: Status = Status.off;

  //status message bound to template
  message: string;

  //used for controlling styles
  timeUp: boolean = false;
  running: boolean = false;
  paused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //when the button is clicked, convert inputs to milliseconds
  //make sure minTime is less than maxTime
  //if it passes, run the timer
  startButton(): void {
    this.timeUp = false;
    if (this.status != Status.on){
      this.minTime = this.getTimeValue(this.minHrs, this.minMin, this.minSec);
      this.maxTime = this.getTimeValue(this.maxHrs, this.maxMin, this.maxSec);
      if (this.minTime > this.maxTime){
        this.message = "The minimum time is greater than the maximum time!";
      }
      else if (this.maxTime <= 0){
        this.message = "Choose a Maximum Time!"
      }
      else {
        if (this.status != "paused")
        {
          this.result = null;
        }
        if (this.minTime < 0){
          this.minTime = 0;
        }
        this.runTimer();
      }
    }
  }
  
  //Pause button
  pauseButton(){
    this.status = Status.paused;
    this.paused = true;
    this.running = false;
    clearInterval(this.update_time);
    clearTimeout(this.timeout);
  }

  //Stop button / end of interval
  //general reset
  stopButton(){
    clearTimeout(this.timeout);
    clearInterval(this.update_time);
    this.status = Status.off;
    this.running = false;
    this.paused = false;
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
      this.message = ' ';
    }
    else if(this.status == Status.on){
      this.elapsed_time = 0;
    }

    //set properties to 'go'
    this.status = Status.on;
    this.paused = false;
    this.start_time = Date.now() - this.elapsed_time;
    //run the interval
    this.runInterval(this.remaining_reps);
  }

  //handles everything that happens while timer runs
  //executes intervals through recursion
  runInterval(reps: number): void {
    this.remaining_reps = reps;
    //resets any lingering intervals/times out
    clearInterval(this.update_time);
    clearTimeout(this.timeout);

    //exit case
    if (reps == 0){
      this.message = "Time's Up!";
      this.timeUp = true;
      setTimeout(() => {
        this.timeUp = false;
      }, 3000);
      this.stopButton();
      return;
    }

    //creates a random time interval
    let interval: number = Math.floor(Math.random() * (this.maxTime - this.minTime)) + this.minTime;
    //console.log(`${interval}`);
    //starts the background animation
    this.running = true;

    //updates the time display every millisecond
    this.update_time = setInterval(() => {
      this.elapsed_time = Date.now() - this.start_time;
    }, 1);

    //items to execute after time interval ends
    this.timeout = setTimeout(() => {
      this.result = interval;
      this.remaining_reps -= 1;
      this.message = `Interval #${this.total_reps - this.remaining_reps} Complete!`;
      this.running = false;
      //starts sequence over with decreased reps
      this.runTimer();
      return;
    }, interval-this.elapsed_time);
  }

}
