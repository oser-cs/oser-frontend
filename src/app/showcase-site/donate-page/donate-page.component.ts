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
  currentCampaignUrl: SafeUrl;
  donateUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.donateUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.donateUrl);
    if (this.config.currentCampaignUrl) {
      this.currentCampaignUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.currentCampaignUrl);
    }
  }

  goTo() {
    jump('#donate-ha-widget');
  }

}
