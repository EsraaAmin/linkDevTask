import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from 'src/app/services/app-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
public articles = AppData.articles.filter(el=>el.showOnHomepage);




  ngOnInit(): void {
  }


  homeSliderConfig = {
    direction: 'horizontal',
    navigation: true,
    grabCursor: true,
    observer: true,
    slidesPerView: 1,
    slideNextClass: 'slider-next',
    slidePrevClass: 'slider-prev',

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  };

}
