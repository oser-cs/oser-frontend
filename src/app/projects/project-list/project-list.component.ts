import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.route.snapshot.data['projects'];
  }

}
