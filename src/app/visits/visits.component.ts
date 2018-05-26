import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core';
import { Link } from 'app/ui';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  navLinks: Link[] = [
    {href: '/sorties', text: 'Sorties'},
    {action: () => this.logout(), text: 'Déconnexion'},
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
