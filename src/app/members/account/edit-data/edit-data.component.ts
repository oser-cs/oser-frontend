import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {ActivatedRoute} from '@angular/router'
import { PersonalData,PersonalDataService } from '../core';
import { tap, mergeMap } from 'rxjs/operators';
import { AuthService } from 'app/core';
import {User} from 'app/core'



@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  personalData: PersonalData;
  formGroup : FormGroup;
  loading = false;
  public error : String = "";
  public postEditMessage : String = "" ;
  public possibleParentsStatus = [
    {id:"Mariés",name:"Mariés"},
    {id:"Divorcés",name:"Divorcés"},
    {id:"Pacsés",name:"Pacsés"},
    {id:"En concubinage",name:"En concubinage"},
    {id:"Famille Monoparentale",name:"Famille monoparentale"},
    {id:"Autre",name:"Autre"}
  ]

  public possibleParentsActivities = [
    {id:"Agriculteur",name:"Agriculteur"},
    {id:"Artisan, commerçant, chef d'entreprise",name:"Artisan, commerçant, chef d'entreprise"},
    {id:"Cadre, profession intellectuelle supérieure",name:"Cadre, profession intellectuelle supérieure"},
    {id:"Enseignant et assimilé",name:"Enseignant et assimilé"},
    {id:"Profession intermédiaire",name:"Profession intermédiaire"},
    {id:"Employé",name:"Employé"},
    {id:"Ouvrier",name:"Ouvrier"},
    {id:"Retraité",name:"Retraité"},
    {id:"Inactif",name:"Inactif"},
    {id:"Autre",name:"Autre"} 
  ]

  public possibleSchools = [
    {id:"Jean Perrin (Longjumeau)", name:"Jean Perrin (Longjumeau)"},
    {id:"Robert Doisneau (Corbeil-Essonnes)",name:"Robert Doisneau (Corbeil-Essonnes)"},
    {id:"Henri Matisse (Montreuil)",name:"Henri Matisse (Montreuil)"},
    {id:"Jean Jaurès (Montreuil)",name:"Jean Jaurès (Montreuil)"},
    {id:"Charles Péguy (Bobigny)",name:"Charles Péguy (Bobigny)"},
    {id:"Jean Jaurès (Chatenay-Malabry)",name:"Jean Jaurès (Chatenay-Malabry)"},
    {id:"Parc des Loges (Evry)",name:"Parc des Loges (Evry)"},
    {id:"Jean-Baptiste Corot (Savigny-sur-Orge)",name:"Jean-Baptiste Corot (Savigny-sur-Orge)"},
    {id:"Gaspard Monge (Savigny-sur-Orge)",name:"Gaspard Monge (Savigny-sur-Orge)"},
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
    private personalDataService : PersonalDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    
  ) { }


  ngOnInit() {
    this.personalData = this.route.snapshot.data['personalData'];
    this.createForm()
  }

  
  createForm() {
    
    this.formGroup = this.formBuilder.group({
      firstName:this.personalData.firstName,
      lastName:this.personalData.lastName,
      gender:this.personalData.gender,
      nationality : this.personalData.nationality,
      addressNumber:[this.personalData.addressNumber,Validators.pattern("^[0-9]*$")],
      street:this.personalData.street,
      zipCode:this.personalData.zipCode,
      city:this.personalData.city,
      personalPhone:[this.personalData.personalPhone,Validators.pattern("^([0-9]{2}[]?){5}$")],
      parentsPhone:[this.personalData.parentsPhone,Validators.pattern("^([0-9]{2}[]?){5}$")],
      parentsEmail:[this.personalData.parentsEmail,Validators.email],
      school:this.personalData.school,
      grade:this.personalData.grade,
      classType : this.personalData.classType,
      specialTeaching:this.personalData.specialTeaching,
      scholarship:this.personalData.scholarship,
      fatherActivity:this.personalData.fatherActivity,
      motherActivity:this.personalData.motherActivity,
      parentsStatus:this.personalData.parentsStatus,
      dependantsNumber:this.personalData.dependantsNumber,
      acceptedConditions: false
    })
 
  }

  submit(){
    this.loading = true;
    const {firstName,lastName,gender,nationality,classType,addressNumber,street,zipCode,city,personalPhone,parentsPhone,parentsEmail,school,grade,specialTeaching,scholarship,fatherActivity,motherActivity,parentsStatus,dependantsNumber} = this.formGroup.value;
    const personalData: PersonalData = {...this.personalData,classType,firstName,lastName,gender,nationality,addressNumber,street,zipCode,city,personalPhone,parentsPhone,parentsEmail,school,grade,specialTeaching,scholarship,fatherActivity,motherActivity,parentsStatus,dependantsNumber};
    
    this.personalDataService.edit(personalData).pipe(
      tap(() => this.loading = false),
      tap(()=> this.error = ""),
      tap(() => {
        this.postEditMessage = "Merci d'avoir completé tes données personnelles ! Nous allons t'envoyer un email contenant le lien vers le dossier d'inscription, si tu ne le reçois pas, pense à vérifier tes spams."
        setTimeout(()=>{
          this.router.navigate(['./membres/compte/donnees'])
          this.postEditMessage = ""
        },7000)
        
      }),
    ).subscribe(
      () => {},
      (error) => {
        this.error = "Erreur lors de la modification des données, vérifie que tes données rentrées sont sous le bon format"
        this.loading = false
      },
    );
  
  }
  

}
