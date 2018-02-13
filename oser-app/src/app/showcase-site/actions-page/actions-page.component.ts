import { Component, OnInit } from '@angular/core';

class Testimony {
  content: string;
  source: string;
}

const TESTIMONIES: Testimony[] = [
  {
    content: "J'ai beaucoup progressé grâce à OSER, merci !",
    source: "Lucie, lycéenne"
  },
  {
    content: "OSER c'est la base ! Je vous kiffe !",
    source: "Georges, lycéen"
  },
  {
    content: "Au début, je n'y croyais pas. Puis je l'ai vu, elle était là, superbe, trônant sur sa montagne de suie. La montagne des ours était une véritable reine des neiges.",
    source: "Mario, plombier fortuné",
  },
]

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

  constructor() { }

  ngOnInit() {
    this.getTestimonies();
    this.getSlideItems();
    this.current = this.slideItems[0];
  }

  getTestimonies(): void {
    // TODO: convert to TestimonyService
    this.testimonies = TESTIMONIES.slice(0, 3);
  }

  getSlideItems(): void {
    // TODO: convert to SlideItemService
    this.slideItems = SLIDEITEMS;
  }

  slide(amount: number) {
    // TODO: add slide animation effect
    let index = this.slideItems.indexOf(this.current) + amount;
    index = (index + this.slideItems.length) % this.slideItems.length;
    this.current = this.slideItems[index];
  }

}
