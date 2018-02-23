import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core';
import { MessageService } from '@app/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading: boolean = false;
  returnUrl: string;
  defaultReturnUrl: string = '/';
  loginSuccessful: 'Connexion réussie';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
     // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.defaultReturnUrl;
  }

  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password).subscribe(
      data => {
        this.messageService.success(this.loginSuccessful, true);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        console.log(error);
        if (error.error && error.error.non_field_errors) {
          this.messageService.error(error.error.non_field_errors);
        }
      }
    );
  }

}
