import { ApiService } from './../../../services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 1.3,
  };
  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.popularItems = this.apiService.items;
    this.featuredItems = this.apiService.items;
  }
}
