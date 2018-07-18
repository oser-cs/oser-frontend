import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core';
import { Link } from 'app/shared';

@Component({
  selector: 'app-showcase-member',
  templateUrl: './showcase-member.component.html',
  styleUrls: ['./showcase-member.component.scss']
})
export class ShowcaseMemberComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {  }

  ngOnInit() { }
  
  navLinks: Link[] = [
    { href: '/membres/accueil', text: 'Mon espace membre' },
    { href: '/membres/projets', text: 'Nos projets'},
    { href: '/membres/sorties', text: 'Nos sorties'},    
    { href: '/', text: "Retourner à l'accueil" },
      //  { href: '/seances', text: 'Mes séances' },
    {action: () => this.logout(), text: 'Déconnexion'},

  ];

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  

}
