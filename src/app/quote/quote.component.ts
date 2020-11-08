import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'We cannot turn the clock back nor can we undo the harm caused..',
      ' Paul Kagame',
      0,
      0,
      new Date(2020, 3, 140)
    ),
    new Quote(
      2,
      'It always seems impossible until its done',
      'Nelson Mandela',
      0,
      0,
      new Date(2019, 6, 9)
    ),
    new Quote(
      3,
      'Change will never come if we wait for some other person or other time',
      ' Barack Obama',
      0,
      0,
      new Date(2022, 1, 12)
    ),
    new Quote(
      4,
      'Life is not fair,get used to it',
      'Bill Gates',
      0,
      0,
      new Date(2019, 0, 18)
    ),
    new Quote(
      5,
      'If you are born poor it is not your mistake but if you die poor it is your mistake',
      'Bill Gates',
      0,
      0,
      new Date(2019, 2, 14)
    ),
    new Quote(
      6,
      'Stay hungry,stay foolish',
      'Steve Jobs',
      0,
      0,
      new Date(2030, 3, 14)
    ),
  ];
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  preNum: number;
  lastNum: number;
  counter: number;

  HighestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].like;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }
  constructor() {}

  ngOnInit(): void {}
}
