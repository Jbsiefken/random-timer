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

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[0]){
       this.status = changes[0].currentValue;
    }
    switch(this.status){
      case Status.off: {
        this.status_message = "off";
      }
      break;
      case Status.on: {
        this.status_message = "on";
        this.startDisplay();
      }
      break;
    }
  }

  startDisplay(){
    this.start_time = Date.now();
    /*
    setTimeout(() => {
      this.elapsed_time += (Date.now() - this.start_time);
      console.log(Date.now());
      console.log(this.elapsed_time);
      this.formatTime(this.elapsed_time);
    }, 1000);
    */
   
   setInterval(() => {
      this.elapsed_time += (Date.now() - this.start_time);
    }, 10);
    setInterval(() => {
      this.formatTime(this.elapsed_time);
    }, 100);
    

  }

  //function called every interval that updates
  //formatted_time based on elapsed_time
  formatTime(time){
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

    switch(hrs){
      case 0: {
        this.formatted_time = `${strMin}:${strSec}:${strMs}`;
      }
      break;
      default: {
        this.formatted_time = `${strHrs}:${strMin}:${strSec}:${strMs}`;
      }
      break;
    }
  }

}
