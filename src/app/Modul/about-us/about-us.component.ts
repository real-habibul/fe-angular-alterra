import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
   }

  ngOnInit(): void {
  }

  carouselImage = [
    {
      "name": "M. Yuchi",
      "description": "Product Description",
      "image": 'carousel1.jpg',
      "facebook": "https://www.facebook.com/moechi.yui",
      "twitter": "https://twitter.com/moechi_yui",
      "linkedin": "https://www.linkedin.com/in/moechi-yui-7b1b1b1b1/"
    },
    {
      "name": "Muhammad Rizky Kurniawan",
      "description": "Product Description",
      "image": "carousel2.jpg",
      "facebook": "https://www.facebook.com/profile.php?id=100078133985948",
      "twitter": "https://twitter.com/mrizkykrnwn_",
      "linkedin": "https://www.linkedin.com/in/mhdrizkyk17/"
    },
		{
      "name": "Senja di Perumahan",
			"description": "Product Description",
			"image": "carousel3.jpg",
      "facebook": "https://www.facebook.com/alterra.id/",
      "twitter": "https://twitter.com/alterragroup",
      "linkedin": "https://www.linkedin.com/company/alterraindonesia/?originalSubdomain=id"
		},
    {
      "name": "Bermain di Taman",
      "description": "Product Description",
      "image": "carousel2.jpg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://twitter.com/",
      "linkedin": "https://www.linkedin.com/"
    },
  ];

  redirectFacebook(item: any) {
    console.log(item);
    window.open(item, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }

  redirectTwitter(item: any) {
  }

  redirectLinkedin(item: any) {
  }

}
