import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '../shared';

@Component({
  selector: 'app-partner-logo',
  templateUrl: './partner-logo.component.html',
  styleUrls: ['./partner-logo.component.scss']
})
export class PartnerLogoComponent implements OnInit {

  @Input() partner: Partner;

  constructor() { }

  ngOnInit() {
  }

}
