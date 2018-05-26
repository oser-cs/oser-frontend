import { Component, OnInit } from '@angular/core';
import { Link } from 'app/ui';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  navLinks: Link[] = [
    {href: '/visits', 'text': 'Sorties'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
