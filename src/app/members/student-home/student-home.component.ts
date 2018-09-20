import { Component } from '@angular/core';
import { AuthService } from 'app/core';

@Component({
  selector: 'student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent {

  userEmail: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userEmail = this.auth.getUserSnapshot().email;
  }
}
