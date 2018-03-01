import { Component, OnInit } from '@angular/core';
import * as config from './config.json';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  config = <any>config;

  constructor() { }

  ngOnInit() {
  }

  get contact(): string {
    return this.config.contact;
  }

  get partners(): string {
    return this.config.partners;
  }

}
