import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TimeFormatter } from '../time-formatter';

@Component({
  selector: 'app-time-display-bravo',
  templateUrl: './time-display-bravo.component.html',
  styleUrls: ['./time-display-bravo.component.css']
})
export class TimeDisplayBravoComponent implements OnChanges {

  @Input() time: number;
  formatted_time: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[0]){
      this.time = changes[0].currentValue;
   }
    this.formatted_time = TimeFormatter.formatTime(this.time);
  }

}
