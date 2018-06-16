import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, Edition } from '../core';
import { Form } from 'app/dynamic-forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  project: Project;
  edition: Edition;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.edition = this.route.snapshot.data['edition'];
    this.project = this.route.snapshot.data['project'];
  }

}
