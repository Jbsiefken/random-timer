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
  status_message: string = "not yet started";

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
      }
      break;

      
    }
  }

}
