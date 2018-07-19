import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core';
import { Link } from 'app/shared';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(
    private renderer: Renderer,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() { }

  navLinks: Link[] = [
    { href: '/membres', text: 'Mon espace membre' },
    { href: '/membres/projets', text: 'Nos projets' },
    { href: '/membres/sorties', text: 'Nos sorties' },
    { href: '/', text: "Retourner à l'accueil" },
    //  { href: '/seances', text: 'Mes séances' },
    { action: () => this.logout(), text: 'Déconnexion' },

  ];

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, 'scrollTop', 0);
  }


}
