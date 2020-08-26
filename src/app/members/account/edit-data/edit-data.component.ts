import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {ActivatedRoute} from '@angular/router'
import { PersonnalData,PersonnalDataService } from '../core';
import { tap, mergeMap } from 'rxjs/operators';
import { AuthService } from 'app/core';
import {User} from 'app/core'



@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  personnalData: PersonnalData;
  formGroup : FormGroup;
  loading = false;
  public possibleParentsStatus = [
    {id:"maried",name:"Mariés"},
    {id:"divorced",name:"Divorcés"},
    {id:"cohabitation",name:"En concubinage"},
    {id:"monoparental",name:"Famille monoparentale"}
  ]

  public possibleParentsActivities = [
    {id:"farmer",name:"Agriculteur"},
    {id:"artisan",name:"Artisan, commerçant, chef d'entreprise"},
    {id:"executive",name:"Cadre, profession intellectuelle supérieure"},
    {id:"teacher",name:"Enseignant et assimilé"},
    {id:"intermediate",name:"Profession intermédiaire"},
    {id:"employee",name:"Employé"},
    {id:"worker",name:"Ouvrier"},
    {id:"retreated",name:"Retraité"},
    {id:"inactive",name:"Inactif"},
    {id:"other",name:"Autre"} 
  ]

  public possibleScholarships = [
    {id:"echelon1",name:"Oui, échelon 1"},
    {id:"echelon2",name:"Oui, échelon 2"},
    {id:"echelon3",name:"Oui, échelon 3"},
    {id:"echelon4",name:"Oui, échelon 4"},
    {id:"echelon5",name:"Oui, échelon 5"},
    {id:"echelon6",name:"Oui, échelon 6"},
    {id:"no",name:"Non"},
  ]



  constructor(
    private route: ActivatedRoute,
    private personnalDataService : PersonnalDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    
  ) { }


  ngOnInit() {
    //this.personnalData = this.route.snapshot.data['personnalData'];
    //On enlevera l'exemple quand on se connectera au back
    this.personnalData = {
      user: new User({id:0}),
      firstName:"Exemple",
      lastName: "Exemple",
      gender: "man",
      nationality: "Française",
      adressNumber:"25",
      street:"avenue exemple",
      zipCode:"99 999",
      city:"Gif sur Yvette",
      personnalPhone:"06 99 99 99 99",
      parentsPhone:"06 99 99 99 99",
      parentsEmail:"email@email.com",
      school:"ecole",
      grade:"troisieme",
      section:"es",
      specialTeaching:"specialite",
      scholarship:"echelon2",
      fatherActivity:"farmer",
      motherActivity:"teacher",
      parentsStatus:"divorced",
      dependantsNumber:3,
    }
    this.createForm()
  }

  
  createForm() {
    
    this.formGroup = this.formBuilder.group({
      firstName:this.personnalData.firstName,
      lastName:this.personnalData.lastName,
      gender:this.personnalData.gender,
      nationality : this.personnalData.nationality,
      adressNumber:this.personnalData.adressNumber,
      street:this.personnalData.street,
      zipCode:this.personnalData.zipCode,
      city:this.personnalData.city,
      personnalPhone:this.personnalData.personnalPhone,
      parentsPhone:this.personnalData.parentsPhone,
      parentsEmail:[this.personnalData.parentsEmail,Validators.email],
      school:this.personnalData.school,
      grade:this.personnalData.grade,
      section:this.personnalData.section,
      specialTeaching:this.personnalData.specialTeaching,
      scholarship:this.personnalData.scholarship,
      fatherActivity:this.personnalData.fatherActivity,
      motherActivity:this.personnalData.motherActivity,
      parentsStatus:this.personnalData.parentsStatus,
      dependantsNumber:this.personnalData.dependantsNumber,
    })
 
  }

  submit(){
    //this.loading = true;
    const {firstName,lastName,gender,nationality,adressNumber,street,zipCode,city,personnalPhone,parentsPhone,parentsEmail,school,grade,section,specialTeaching,scholarship,fatherActivity,motherActivity,parentsStatus,dependantsNumber} = this.formGroup.value;
    const personnalData: PersonnalData = {user:this.personnalData.user,firstName,lastName,gender,nationality,adressNumber,street,zipCode,city,personnalPhone,parentsPhone,parentsEmail,school,grade,section,specialTeaching,scholarship,fatherActivity,motherActivity,parentsStatus,dependantsNumber};
    console.log("data",personnalData)

    //La partie commentée sera à rajouter lors de la connexion au back
    // this.personnalDataService.edit(personnalData).pipe(
    //   tap(() => this.loading = false),
    //   tap(() => this.router.navigate(['./membres/compte/donnees'])),
    // ).subscribe(
    //   () => {},
    //   (error) => this.loading = false,
    // );
  
  }
  

}
