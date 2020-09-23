import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {PersonalData} from '../core'
import {User} from 'app/core'

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {
  
  personalData: PersonalData;
  
  public gender= {
    "man":"Homme",
    "woman":"Femme",
    "other":"Autre"
  }
  public grade = {
    "troisieme": "Troisième",
    "seconde":"Seconde",
    "premiere":"Première",
    "terminale":"Terminale"

  }
  public scholarship = {
    "echelon1": "Oui, échelon 1",
    "echelon2": "Oui, échelon 2",
    "echelon3": "Oui, échelon 3",
    "echelon4": "Oui, échelon 4",
    "echelon5": "Oui, échelon 5",
    "echelon6": "Oui, échelon 6",
    "no" : "Non"

  }

  public activity = {
    "farmer":"Agriculteur",
    "artisan":"Artisan, commerçant, chef d'entreprise",
    "executive":"Cadre, profession intellectuelle supérieure",
    "teacher":"Enseignant et assimilé",
    "intermediate":"Profession intermédiaire",
    "employee":"Employé",
    "worker":"Ouvrier",
    "retreated":"Retraité",
    "inactive":"Inactif",
    "other":"Autre" 
  }
  public status = {
    "maried":"Mariés",
    "divorced":"Divorcés",
    "cohabitation":"En concubinage",
    "monoparental":"Famille monoparentale"
  }
  
  public editData = (e)=> {
    this.router.navigate(['./membres/compte/modifier_donnees'])
  }
  
 

  constructor(private route: ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    
    this.personalData = this.route.snapshot.data['personalData'];
    
  }

}
