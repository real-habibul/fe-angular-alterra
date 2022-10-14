import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { IArticles } from 'src/app/models/iarticles';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: IArticles[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getArticlesAll().subscribe((data: IArticles[]) => {
      console.log(data);
      this.articles = data;
    });
  }

}
