import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectsPageComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
