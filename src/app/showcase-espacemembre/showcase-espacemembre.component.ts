import { Component, OnInit, Renderer } from '@angular/core';
//import { Link } from 'app/shared';
import { Router } from '@angular/router';
import { AuthService } from 'app/core';


@Component({
  selector: 'app-showcase-espacemembre',
  templateUrl: './showcase-espacemembre.component.html',
  styleUrls: ['./showcase-espacemembre.component.scss']
})
export class ShowcaseEspacemembreComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer
  ) {  }

//  navLinks: Link[] = [
//    { href: '/qui-sommes-nous', text: 'Qui sommes-nous ?' },
//  ];

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
