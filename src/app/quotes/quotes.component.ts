import { Component, OnInit } from '@angular/core';
import { doesNotReject } from 'assert';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Quote Hub';
  quotes:Quote[] = [
    new Quote (1,'If music be the food of love, play on.','William shakespeare ', new Date(2020,11,2),0,0),
    new Quote (2,'If you can dream it, you can do it. Walt Disney','Walt Disney',new Date(2020,11,1),0,0),
    new Quote (3,'Start by doing what is necessary then do what is possible; and suddenly you are doing the impossible.','Francis of Assisi',new Date(2020,10,31),0,0),
    new Quote (4,'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.','Ralph Waldo Emerson',new Date(2020,11,2),0,0),
    new Quote (5,'We know what we are, but know not what we may be.','William shakespeare',new Date(2020,11,2),0,0),
    new Quote (6,'If opportunity does not knock, build a door.','Milton Berle',new Date(2020,11,2),0,0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
