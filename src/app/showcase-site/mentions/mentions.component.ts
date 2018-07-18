import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss']
})
export class MentionsComponent {

  document: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.document = this.route.snapshot.data['document'];
  }

}
