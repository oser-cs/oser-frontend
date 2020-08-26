import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'app/shared';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor( private router: Router ) { }
  
  navLinks: Link[] = [
    { href: './donnees', text: 'Mes données' },
    { href: './modifier_donnees', text: 'Modifier mes données' },
    { href: './mon_dossier', text: 'Mon dossier' },
    
  ];
  ngOnInit() {
    this.router.navigate(['./membres/compte/donnees'])
  }

}
