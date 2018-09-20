import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core';
import { Link } from 'app/shared';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  navLinks: Link[] = [
    { href: './', text: 'Mon espace' },
    { href: './projets', text: 'Nos projets' },
    { href: './sorties', text: 'Nos sorties' },
    { text: 'Déconnexion', action: () => this.logout() },
  ];

  private logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
