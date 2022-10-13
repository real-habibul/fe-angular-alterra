import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responsiveOptions: any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
    },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      }
    ];
  }

  carouselImage = [
    {
      "name": "Malam Minggu",
      "description": "Product Description",
      "image": 'carousel1.jpg',
    },
    {
      "name": "Komedi Putar",
      "description": "Product Description",
      "image": "carousel2.jpg",
    },
		{
      "name": "Senja di Perumahan",
			"description": "Product Description",
			"image": "carousel3.jpg",
		},
    {
      "name": "Komedi Putar",
      "description": "Product Description",
      "image": "carousel2.jpg",
    },
  ];

  ngOnInit(): void {

  }

}
