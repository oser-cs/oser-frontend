import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Testimony, TestimonyService,
  Action, ActionService
} from 'app/showcase-site/shared';

class SlideItem {
  title: string;
  image: string;
  shortDescription: string;
}

const SLIDEITEMS: SlideItem[] = [
  {
    title: "Focus Europe",
    image: "assets/img/slide-1.jpg",
    shortDescription: "Chaque année pendant quatre jours, Focus Europe emmène les lycéens à la découverte d'une grande capitale européenne."
  },
  {
    title: "Good Morning London",
    image: "assets/img/slide-2.jpg",
    shortDescription: "Hi there! Good Morning London est notre stage linguistique 100% britanique."
  },
  {
    title: "Le tutorat",
    image: "assets/img/slide-3.jpg",
    shortDescription: "Chaque semaine, tuteurs et tutorés se retrouvent en petits groupes pour des activités pédagogiques variées et stimulantes."
  }
]

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.scss']
})
export class ActionsPageComponent implements OnInit {

  testimonies: Testimony[];
  slideItems: SlideItem[];
  current: SlideItem;
  slideInterval: number = 9000;
  actions: Action[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.actions = this.route.snapshot.data['actions'];
    this.testimonies = this.route.snapshot.data['testimonies'];
    this.getSlideItems();
  }

  getSlideItems(): void {
    // TODO: convert to SlideItemService
    this.slideItems = SLIDEITEMS;
    this.current = this.slideItems[0];
  }

  slide(amount: number) {
    // TODO: add slide animation effect
    let index = this.slideItems.indexOf(this.current) + amount;
    index = (index + this.slideItems.length) % this.slideItems.length;
    this.current = this.slideItems[index];
  }

}
