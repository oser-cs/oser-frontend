import { Component, OnInit } from '@angular/core';
import jump from 'jump.js';

@Component({
  selector: 'app-donate',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.scss']
})
export class DonatePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goTo() {
    jump('#haWidget');
  }

}
