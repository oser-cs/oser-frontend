import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import jump from 'jump.js';
import * as config from './config.json';

@Component({
  selector: 'app-donate',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.scss']
})
export class DonatePageComponent implements OnInit {

  config = <any>config;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  goTo() {
    jump('#haWidget');
  }

  get haWidgetUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.config.helloAsso);
  }

}
