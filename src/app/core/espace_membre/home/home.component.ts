import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyFigure } from '../shared/keyfigure.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  keyFigures: KeyFigure[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.keyFigures = this.route.snapshot.data['keyFigures'];
  }

}

