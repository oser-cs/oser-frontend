import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'students-home-page',
  templateUrl: './students-home-page.component.html',
  styleUrls: ['./students-home-page.component.scss']
})
export class StudentsHomePageComponent { 

  constructor( private router: Router ) { }

}



