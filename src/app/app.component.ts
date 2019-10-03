import { Component } from '@angular/core';
import { Quote } from './quote-class/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes: Quote[] = [
    // {id:1, upvote:0, downvote:0, author: "Bill Graham", uploaded:"Tona", name:"You miss 100% of the shots you don't take."},
    // {id:2, upvote:0, downvote:0, author: "Mahatma Gandhi", uploaded:"Daphin", name:'If you cannot do great thngs, you can do smal things in a great way'},
    // {id:3, upvote:0, downvote:0, author: "Anonymous", uploaded:"Tona", name:"Don't fake it till you make it. Fake it till you become it"}
  ];
}
