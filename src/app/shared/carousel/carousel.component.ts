import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  @Input() autoSlide = true;
  @Input() slideInterval = 5000; // Default to 5 seconds

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  onMouseEnter(): void {
    if (this.autoSlide) {
      this.stopAutoSlide();
    }
  }

  onMouseLeave(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
}
