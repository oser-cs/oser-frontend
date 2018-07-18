// Hugely inspired by https://netbasal.com/building-a-simple-carousel-component-with-angular-3a94092b7080

import {
  Component, OnInit, OnDestroy, Input, AfterViewInit, AfterContentInit,
  ContentChildren, ViewChildren, ViewChild, QueryList, ElementRef,
} from '@angular/core';
import {
  AnimationFactory, AnimationBuilder, AnimationPlayer,
  animate, style
} from '@angular/animations';
import { Observable, interval, timer } from 'rxjs';
import { CarouselDirective, CarouselItemElement } from './carousel.directive';

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  @ContentChildren(CarouselDirective) items: QueryList<CarouselDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel : ElementRef;
  @Input() itemWidth = 480;
  carouselWrapperStyle: any = {};
  @Input() interval = 5000;  // in ms
  @Input() timing = '700ms ease-in-out';
  private player: AnimationPlayer;
  private currentSlide = 0;
  slideSub: any;
  private paused: boolean = false;
  pausedSub: any;

  constructor(private builder: AnimationBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    }
  }
  ngAfterContentInit() {
    // Go to the next element
    this.slideSub = interval(this.interval).subscribe(_ => {
      if (this.paused) return;
      this.next();
    });
  }

  playAnim() {
    // Build and play an animation
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation : AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  goTo(index: number) {
    this.currentSlide = index;
    this.playAnim();
  }

  goToForce(index: number) {
    // Pause the automatic sliding
    this.paused = true;
    if (this.pausedSub) {
      this.pausedSub.unsubscribe();
    }
    // Turn on automatic sliding back after an interval
    this.pausedSub = timer(this.interval).subscribe(
      _ => this.paused = false
    );
    this.goTo(index);
  }

  next() {
    if (!this.items) return;
    const index = (this.currentSlide + 1) % this.items.length;
    this.goTo(index);
  }

  prev() {
    if (!this.items) return;
    const index = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    this.goTo(index);
  }

  ngOnDestroy() {
    if (this.slideSub) {
      this.slideSub.unsubscribe();
      this.slideSub = null;
    }
  }

}
