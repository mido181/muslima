import { Component, Input, model, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';
@Component({
  selector: 'app-dashboard',
  imports: [GalleriaModule, FormsModule, RouterLink, CarouselComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [],
})
export class DashboardComponent {
  websiteName = 'تواصل';

  carouselSlides = [
    {
      image: 'assets/imgs/pexels-artempodrez-5125224.jpg',
      alt: 'First slide',
      caption: `اهلا بك في ${this.websiteName} ملتقي العرب التقي بأصدقاء من جميع انحاء العالم  `,
    },
    {
      image: 'assets/imgs/pexels-cedric-fauntleroy-8154796.jpg',
      alt: 'Second slide',
      caption: `اهلا بك في ${this.websiteName} ملتقي العرب التقي بأصدقاء من جميع انحاء العالم  `,
    },
    {
      image: 'assets/imgs/pexels-yankrukov-8911422.jpg',
      alt: 'Second slide',
      caption: `اهلا بك في ${this.websiteName} ملتقي العرب التقي بأصدقاء من جميع انحاء العالم  `,
    },
    {
      image: 'assets/imgs/pexels-armin-rimoldi-5553113.jpg',
      alt: 'Second slide',
      caption: `اهلا بك في ${this.websiteName} ملتقي العرب التقي بأصدقاء من جميع انحاء العالم  `,
    },
  ];
}

