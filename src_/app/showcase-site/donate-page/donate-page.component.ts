import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import jump from 'jump.js';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-donate',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.scss']
})
export class DonatePageComponent implements OnInit {

  currentCampaignUrl: SafeUrl;
  donateUrl: SafeUrl;
  document: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.document = this.route.snapshot.data['document'];
    this.donateUrl = this.getSafe(environment.donateUrl);
    if (environment.currentCampaignUrl) {
      this.currentCampaignUrl = this.getSafe(environment.currentCampaignUrl);
    }
  }

  getSafe(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goTo() {
    jump('#donate-ha-widget');
  }

}
