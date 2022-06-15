import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
title: string = 'My 5 Favorite Shows';

shows: Show[] = [
{title: 'The Good Place', genre: 'Comedy', mainCharacter: 'Eleanor Shellstrop', maturityRating: 'TV-14'},
{title: 'Ozark', genre: 'Thriller', mainCharacter: 'Marty Byrde', maturityRating: 'TV-MA'}, 
{title: 'Jane The Virgin', genre: "Drama", mainCharacter: 'Jane Gloriana Villanueva', maturityRating: 'TV-14'},
{title: 'How To Get Away With Murder', genre:'Mystery', mainCharacter: 'Annalise Keating', maturityRating: 'TV-14'},
{title: 'Being Mary Jane', genre: 'Drama', mainCharacter: 'Mary Jane Paul', maturityRating: 'TV-14'},
]

  constructor() { }

  ngOnInit(): void {
  }
  trackByFn(index: any, item: any){
    return item.title
  }
}

class Show {
  title: string;
  genre: string;
  mainCharacter: string;
  maturityRating: string;
}
