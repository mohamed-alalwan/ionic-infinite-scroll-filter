import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {

  @Input() rating!: number;

  constructor() { }

  ngOnInit() {}

  getAverageReviewRating(): number {
    const roundedRating = Math.round(this.rating * 10) / 10;
    return roundedRating;
  }

}
