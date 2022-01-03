import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.page.html',
  styleUrls: ['./detail-news.page.scss'],
})
export class DetailNewsPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    speed: 400,
  };
  slideHeader = {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

}
