import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';
import { Registration, RegistrationService, PasswordErrorStateMatcher, EmailErrorStateMatcher, PersonnalData, PersonnalDataService } from '../core';
import { AuthService } from 'app/core';


@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  registration: Registration;
  personnalData: PersonnalData
  formGroup: FormGroup;
  error: String;
  loading = false;
  public showPersonnalDataForm = false;
  public zipPattern = new RegExp(/^\d{5}(?:\d{2})?$/)
  public possibleParentsStatus = [
    { id: "maried", name: "Mariés" },
    { id: "divorced", name: "Divorcés" },
    { id: "cohabitation", name: "En concubinage" },
    { id: "monoparental", name: "Famille monoparentale" }
  ]

  public possibleParentsActivities = [
    { id: "farmer", name: "Agriculteur" },
    { id: "artisan", name: "Artisan, commerçant, chef d'entreprise" },
    { id: "executive", name: "Cadre, profession intellectuelle supérieure" },
    { id: "teacher", name: "Enseignant et assimilé" },
    { id: "intermediate", name: "Profession intermédiaire" },
    { id: "employee", name: "Employé" },
    { id: "worker", name: "Ouvrier" },
    { id: "retreated", name: "Retraité" },
    { id: "inactive", name: "Inactif" },
    { id: "other", name: "Autre" }
  ]

  public possibleScholarships = [
    { id: "echelon1", name: "Oui, échelon 1" },
    { id: "echelon2", name: "Oui, échelon 2" },
    { id: "echelon3", name: "Oui, échelon 3" },
    { id: "echelon4", name: "Oui, échelon 4" },
    { id: "echelon5", name: "Oui, échelon 5" },
    { id: "echelon6", name: "Oui, échelon 6" },
    { id: "no", name: "Non" },
  ]

  passwordMatcher = new PasswordErrorStateMatcher();
  emailMatcher = new EmailErrorStateMatcher();

  constructor(
    private registrationService: RegistrationService,
    private personnalDataService: PersonnalDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.formGroup = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ['', Validators.email],
      emailConfirm: '',
      phoneNumber: '',
      gender: '',
      adressNumber: '',
      street: '',
      zipCode: ['', Validators.pattern(this.zipPattern)],
      city: '',
      personnalPhone: '',
      parentsPhone: '',
      parentsEmail: ['', Validators.email],
      school: '',
      grade: '',
      section: '',
      specialTeaching: '',
      scholarship: '',
      fatherActivity: '',
      motherActivity: '',
      parentsStatus: '',
      dependantsNumber: '',
      password: '',
      passwordConfirm: '',
      agree: [false, Validators.required],
      filledForm: false,
      acceptedConditions: false,
    }, { validator:[(group) => this.checkPasswords(group), (group)=>this.checkEmails(group)] })
    console.log(this.formGroup.value.agree)
  }

  private checkPasswords(group: FormGroup): null | any {
    const password = group.controls.password.value;
    const passwordConfirm = group.controls.passwordConfirm.value;
    return password === passwordConfirm ? null : { passwordsDifferent: true };
  }
  private checkEmails(group: FormGroup): null | any {
    const email = group.controls.email.value;
    const emailConfirm = group.controls.emailConfirm.value;
    return email === emailConfirm ? null : { emailsDifferent: true };
  }

  
  submit() {
    this.loading = true;
    const { email, firstName, lastName, phoneNumber } = this.formGroup.value
    const registration: Registration = { email, firstName, lastName, phoneNumber };
  
    const password: string = this.formGroup.controls.password.value;
    this.registrationService.create(registration, password).pipe(
      mergeMap(() => this.auth.login(registration.email, password)),
      tap(() => this.snackBar.open(
        `Ton compte a été créé ! Tu es maintenant connecté.`,
        'OK',
        { duration: 3000 },
      )),
      tap(() => this.error = ""),
      tap(() => this.loading = false),
      tap(() => {
        setTimeout(() => {
          this.router.navigate(['./membres'])

        }, 3000)
      })

    ).subscribe(
      () => { },
      (error) => {


        this.loading = false

        if (error.error.email) {
          this.error = "Erreur, cet email est déjà utilisé !"
        }
      }

    );
    // this.personnalDataService.create(personnalData).pipe(
    //   tap(() => this.loading = false),
    //   tap(() => this.router.navigate(['/'])),
    // ).subscribe(
    //   () => {},
    //   (error) => this.loading = false,
    // );
  }
}
