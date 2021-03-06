import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/shared/models/articles.model';

import { LandingService } from 'src/app/shared/services/landing.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent implements OnInit {
  activeArticle: Articles;
  id;
  photoUrlApi = environment.apiphotoURl;

  constructor(
    private route: ActivatedRoute,
    private landingService: LandingService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.landingService.FETCH_article(this.id).subscribe((data) => {
      this.activeArticle = data;
      console.log(this.activeArticle.content);
    });
  }
}
