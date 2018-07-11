import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Link } from 'app/shared';
@Component({
  selector: 'students-home-page',
  templateUrl: './students-home-page.component.html',
  styleUrls: ['./students-home-page.component.scss']
})
export class StudentsHomePageComponent implements OnInit {

  navLinks: Link[] = [
    {href: '/sorties', text: 'Sorties'}, 
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
