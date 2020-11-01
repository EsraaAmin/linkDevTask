import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/services/app-data';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  public term: string;

  public allArticles = AppData.articles;
  public sourceCategory = AppData.sourceCategory;
  public selectedCategoryId: any;

  constructor() { }


  ngOnInit() {

  }
  selectCategory(param) {
    this.allArticles = AppData.articles;
    if (this.selectedCategoryId === 0) {
      this.allArticles = AppData.articles;
    }    
    this.selectedCategoryId = param.target.value;
    this.allArticles = this.allArticles.filter(el => el.sourceID == this.selectedCategoryId)
  }

}

