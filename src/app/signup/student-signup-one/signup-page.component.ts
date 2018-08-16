import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Registration, RegistrationService } from '../core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupTutoreOneComponent implements OnInit {

  hide = true;

  registration: Registration;
  formGroup: FormGroup;

  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // this.formGroup = this.formBuilder.group({
    //   email: '',
    //   password: '',
    //   passwordConfirm: '',
    //   firstName: '',
    //   lastName: '',
    //   gender: null,
    //   dateOfBirth: null,
    //   phone: '',
    //   school: '',
    //   address: this.formBuilder.group({
    //     line1: '',
    //     line2: '',
    //     postCode: '',
    //     city: '',
    //     country: {
    //       name: 'France',
    //       code: 'FR',
    //     }
    //   }),
    //   emergencyContact: this.formBuilder.group({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     homePhone: '',
    //     mobilePhone: '',
    //   })
    // })
    this.formGroup = this.formBuilder.group({
      email: 'florimond.manca@foo.baz',
      password: '1234',
      passwordConfirm: '1234',
      firstName: 'Florimond',
      lastName: 'Manca',
      gender: 'M',
      dateOfBirth: new Date('1996-06-02'),
      phone: '0612345678',
      address: this.formBuilder.group({
        line1: '1 Rue des Lilas',
        line2: '',
        postCode: '91190',
        city: 'Gif-sur-Yvette',
        country: {
          name: 'France',
          code: 'FR',
        }
      }),
      emergencyContact: this.formBuilder.group({
        firstName: 'Alice',
        lastName: 'Brandon',
        email: 'alice.brandon@example.com',
        homePhone: '',
        mobilePhone: '',
      })
    })
  }

  submit() {
    const registration: Registration = this.formGroup.value;
    const password: string = this.formGroup.controls.password.value;
    this.registrationService.create(registration, password).pipe(
      tap(console.log),
    ).subscribe();
  }

}
