import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edition, Participation } from '../core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  editions: Edition[];
  participations: Participation[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.editions = this.route.snapshot.data['editions'];
    this.participations = this.route.snapshot.data['participations'];
  }

}
