import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnChanges {
  @Input() result: number;
  list: Array<number> = new Array<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[0]){
      this.result = changes[0].currentValue;
    }
    if(this.result == null){
      this.list = new Array<number>();
    }
    else{
      this.list.push(this.result);
    }
  }

}
