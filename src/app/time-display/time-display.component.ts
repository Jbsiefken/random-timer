import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Status } from '../Status';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnChanges {

  @Input() status: Status;
  formatted_time: string;
  status_message: string;

  elapsed_time: number = 0;
  start_time: number;

  update_time: any;
  update_display: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[0]){
       this.status = changes[0].currentValue;
    }
    switch(this.status){
      case Status.off: {
        this.status_message = "off";
        if(this.update_display != null){
          this.stopDisplay();
        }
      }
      break;
      case Status.on: {
        this.status_message = "on";
        this.startDisplay();
      }
      break;
      case Status.paused: {
        this.status_message = "paused";
        this.pauseDisplay();
      }
    }
  }

  //Starts running stopwatch-style display
  startDisplay(){
    this.start_time = Date.now() - this.elapsed_time;
   
    //Updates record of amount of time passed
   this.update_time = setInterval(() => {
      this.elapsed_time = Date.now() - this.start_time;
    }, 1);

    //Refreshes the display
    this.update_display = setInterval(() => {
      this.formatted_time = this.formatTime(this.elapsed_time);
    }, 10);
  }

  //Stops the display and resets elapsed_time value
  stopDisplay(){
    clearInterval(this.update_display);
    clearInterval(this.update_time);
    this.elapsed_time = 0;
    this.formatted_time = this.formatTime(this.elapsed_time);
  }

  //Pauses the display but leaves elapsed_time
  pauseDisplay(){
    clearInterval(this.update_display);
    clearInterval(this.update_time);
  }

  //function called every interval that updates
  //formatted_time based on elapsed_time
  formatTime(time): string{
    let hrsTime = time / 3600000;
    let hrs = Math.floor(hrsTime);
    let minTime = (hrsTime - hrs) * 60;
    let min = Math.floor(minTime);
    let secTime = (minTime - min) * 60;
    let sec = Math.floor(secTime);
    let msTime = (secTime - sec) * 100;
    let ms = Math.floor(msTime);

    let strHrs = hrs.toString().padStart(2, "0");
    let strMin = min.toString().padStart(2, "0");
    let strSec = sec.toString().padStart(2, "0");
    let strMs = ms.toString().padStart(2, "0");

    if(hrs == 0){
      return `${strMin}:${strSec}:${strMs}`;
    }
    else{
      return `${strHrs}:${strMin}:${strSec}:${strMs}`;
    }
  }

}
