import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppData } from 'src/app/services/app-data';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  public term: string;

  public allArticles = AppData.articles;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {

  }


}

