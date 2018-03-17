import { Component, OnInit, Input } from '@angular/core';
import { Partner } from './partner.model';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  @Input() partner: Partner;

  constructor() { }

  ngOnInit() {
  }

}
