import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
  }

}
