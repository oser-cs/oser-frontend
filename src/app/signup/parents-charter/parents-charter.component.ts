import { Component, OnInit } from '@angular/core';

import { Registration, RegistrationService, PasswordErrorStateMatcher,PersonnalData,PersonnalDataService } from '../core';
import { StudentSignupComponent } from '../student-signup/student-signup.component';

@Component({
  selector: 'app-parents-charter',
  templateUrl: './parents-charter.component.html',
  styleUrls: ['./parents-charter.component.scss']
})
export class ParentsCharterComponent implements OnInit {

  state_general:boolean;
  state_data:boolean;
  state_image:boolean;
  state_button:boolean;
  

  constructor() { }

  ngOnInit() {
   
  }

  toggleGeneral(){
    this.state_general=!this.state_general;
  }
  toggleData(){
    this.state_data=!this.state_data;
  }

  toggleImage(){
    this.state_image=!this.state_image;
  }

  toggleSuivant(){
    this.state_button = !this.state_general || !this.state_data;
    return !this.state_button;
  }

  submit(){
    

  }

}
