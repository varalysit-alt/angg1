import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { newNewsItem } from 'src/app/@theme/components/menu/services/news.service';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  newsForm = new FormGroup({})

  ngOnInit() {

  }

  onSubmit() {

  }

  constructor(){}

}
