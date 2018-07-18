import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'students-home-page',
  templateUrl: './students-home-page.component.html',
  styleUrls: ['./students-home-page.component.scss']
})
export class StudentsHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
