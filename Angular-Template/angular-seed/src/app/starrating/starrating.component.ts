import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnChanges {
  @Input() rank: number;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
  counter: number;
  ngOnChanges(): void {
    //console.log(this.rank);
  }

  constructor() {
    this.counter = 1;
   }

  // tslint:disable-next-line:one-line
  decreaseRank(): void{
    //this.counter++;
    this.ratingClicked.emit(this.counter);
  }

}
