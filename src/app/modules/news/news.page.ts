import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  
  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    speed: 400,
  };
  
  constructor() { }

  ngOnInit() {
  }

}
