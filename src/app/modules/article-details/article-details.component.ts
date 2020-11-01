import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/services/app-data';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  articles: Array<object> = AppData['articles'];
  article: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.article_id !== undefined) {
        const index = this.articles.findIndex(article => +article['id'] === +params.article_id);
        this.article = this.articles[index];
        window.scrollTo(0, 0)
      }
    });
  }

}
