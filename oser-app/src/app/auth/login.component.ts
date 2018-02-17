import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading: boolean = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
     // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/showcase';
  }

  login() {
    this.loading = true;
    // alert('login!');
    this.auth.login(this.model.username, this.model.password).subscribe(
      data => {
        this.messageService.success('Connexion réussie', true);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        console.log(error);
        this.messageService.error(error.error.non_field_errors);
      }
    );
  }

}
