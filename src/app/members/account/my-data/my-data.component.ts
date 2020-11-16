import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {PersonalData} from '../core'
import * as moment from 'moment'
import {User} from 'app/core'

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {
  
  personalData: PersonalData;
  validatedAccount : String;
  dateNow: Date;
  currentYear: String;
  
  public grade = {
    "troisieme": "Troisième",
    "seconde":"Seconde",
    "premiere":"Première",
    "terminale":"Terminale"

  }
  
  //Styles validated account label depending on the status of the account
  public styleValidatedAccount = ()=> {
    if(this.validatedAccount==="Données personnelles non remplies"){
      return 'not-sent-label'
    }else if (this.validatedAccount==="En cours de validation"){
      return 'in-progress-label'
    }else if (this.validatedAccount==="Validé"){
      return 'validated-label'
    }
  }
  public scholarship = {
    "echelon0": "Oui, échelon 0",
    "echelon1": "Oui, échelon 1",
    "echelon2": "Oui, échelon 2",
    "echelon3": "Oui, échelon 3",
    "echelon4": "Oui, échelon 4",
    "echelon5": "Oui, échelon 5",
    "echelon6": "Oui, échelon 6",
    "echelon7": "Oui, échelon 7",
    "no" : "Non"

  }

  
  
  public editData = ()=> {
    this.router.navigate(['./membres/compte/modifier_donnees'])
  }
  
 

  constructor(private route: ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    
    this.personalData = this.route.snapshot.data['personalData']
    this.dateNow = new Date()
    if(moment(this.dateNow).month()>=9){
      this.currentYear = moment(this.dateNow).year() + "/"+ String(moment(this.dateNow).year()+1)
    }else{
      this.currentYear = String(moment(this.dateNow).year() -1) + "/"+moment(this.dateNow).year()
    }
    
    if(this.personalData.registration.validated){
      this.validatedAccount= "Validé"
    }else if(this.personalData.year===this.currentYear){
      this.validatedAccount="En cours de validation"
    }else{
      this.validatedAccount="Données personnelles non remplies"
    }
    
  }

}
