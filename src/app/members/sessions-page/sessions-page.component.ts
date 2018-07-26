import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.scss']
})
export class SessionsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
