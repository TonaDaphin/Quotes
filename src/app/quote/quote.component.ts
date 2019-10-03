import { Component , OnInit} from '@angular/core';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{
  title = 'Quotes';
  quotes: Quote[] = [
    new Quote(1, 0, 0,"Bill Graham", "Tona","You miss 100% of the shots you don't take.",new Date(2018,2,7)),
    new Quote(2, 0, 0,"Mahatma Gandhi","Daphin",'If you cannot do great thngs, you can do smal things in a great way', new Date(2017,1,16)),
    new Quote(3,0, 0,"Anonymous","Tona","Don't fake it till you make it. Fake it till you become it", new Date(2019,7,20))
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishedDate = new Date(quote.publishedDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }
}