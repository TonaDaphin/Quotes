import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(done:boolean){
  this.isDelete.emit(done);
}
upvote: number;
  downvote: number;

  constructor(
  ) { 
    this.upvote = 0;
    this.downvote = 0;
  }
  like(){
    this.upvote += 1;
  }
  dislike(){
    this.downvote += 1;
  }
  ngOnInit() {
  }

}
