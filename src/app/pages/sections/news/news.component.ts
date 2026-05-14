import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { newsItem } from 'src/app/@theme/components/menu/models/news.model';
import { newNewsItem } from 'src/app/@theme/components/menu/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit{
  newsData =  new newNewsItem();
  newItems: newsItem[] = this.newsData.newsItems;

  newsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {

  }
}

