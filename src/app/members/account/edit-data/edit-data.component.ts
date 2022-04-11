import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {ActivatedRoute} from '@angular/router'
import { PersonalData,PersonalDataService } from '../core';
import { tap, mergeMap } from 'rxjs/operators';
import { AuthService } from 'app/core';
import {User} from 'app/core';




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
  public dataList; 

  public possibleParentsStatus = [
    {id:"maried",name:"Vos parents vivent ensemble"},
    {id:"cohabitation",name:"Vos parents vivent séparément"},
    {id:"monoparental",name:"Vous avez un seul parent"}
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

  
  public possibleSpecialitiesTechno = [
    {id:"Aucun",name:"Aucun"},
    {id:"STI2D",name:"Sciences et technologies de l’industrie et du développement durable"},
    {id:"STD2A",name:"Sciences et technologies du design et des arts appliqués"},
    {id:"STMG",name:"Sciences et technologies du management et de la gestion"},
    {id:"ST2S",name:"Sciences et technologies de la santé et du social"},
    {id:"STL",name:"Sciences et technologies de laboratoire"},
    {id:"S2TMD",name:"Sciences et techniques du théâtre, de la musique et de la danse"},
    {id:"STHR",name:"Sciences et technologies de l'hôtellerie et de la restauration"},
    {id:"STAV",name:"Sciences et technologies de l'agronomie et du vivant"},

  ]

  public possibleSpecialitiesPro = [
    {id:"Aucun",name:"Aucun"},
    {id:"Accompagnement soins et services à la personne",name:"Accompagnement soins et services à la personne"},
    {id:"Aéronautique",name:"Aéronautique"},
    {id:"Aménagement et finition du bâtiment",name:"Aménagement et finition du bâtiment"},
    {id:"Animation - enfance et personnes âgées",name:"Animation - enfance et personnes âgées"},
    {id:"Artisanat et métiers d'art",name:"Artisanat et métiers d'art"},
    {id:"Assistance à la gestion des organisations et de leurs activités",name:"Assistance à la gestion des organisations et de leurs activités"},
    {id:"Aviation générale",name:"Aviation générale"},
    {id:"Bio-industries de transformation",name:"Bio-industries de transformation"},
    {id:"Boucher charcutier traiteur",name:"Boucher charcutier traiteur"},
    {id:"Boulanger - pâtissier",name:"Boulanger - pâtissier"},
    {id:"Commerce",name:"Commerce"},
    {id:"Commercialisation et services en restauration",name:"Commercialisation et services en restauration"},
    {id:"Conducteur transport routier marchandises",name:"Conducteur transport routier marchandises"},
    {id:"Construction des carrosseries",name:"Construction des carrosseries"},
    {id:"Cuisine",name:"Cuisine"},
    {id:"Esthétique cosmétique parfumerie",name:"Esthétique cosmétique parfumerie"},
    {id:"Étude et définition de produits industriels",name:"Étude et définition de produits industriels"},
    {id:"Etude et réalisation d'agencement",name:"Etude et réalisation d'agencement"},
    {id:"Façonnage de produits imprimés, routage",name:"Façonnage de produits imprimés, routage"},
    {id:"Fonderie",name:"Fonderie"},
    {id:"Gestion administration",name:"Gestion administration"},
    {id:"Gestion des pollutions et protection de l'environnement",name:"Gestion des pollutions et protection de l'environnement"},
    {id:"Hygiène, propreté et stérilisation",name:"Hygiène, propreté et stérilisation"},
    {id:"Installateur en chauffage, climatisation et énergies renouvelables ",name:"Installateur en chauffage, climatisation et énergies renouvelables "},
    {id:"Interventions sur le patrimoine bâti",name:"Interventions sur le patrimoine bâti"},
    {id:"Logistique",name:"Logistique"},
    {id:"Maintenance des équipements industriels",name:"Maintenance des équipements industriels"},
    {id:"Maintenance des matériels",name:"Maintenance des matériels"},
    {id:"Maintenance des systèmes de production connectés",name:"Maintenance des systèmes de production connectés"},
    {id:"Maintenance des véhicules",name:"Maintenance des véhicules"},
    {id:"Maintenance et Efficacité Energétique",name:"Maintenance et Efficacité Energétique"},
    {id:"Maintenance nautique",name:"Maintenance nautique"},
    {id:"Menuiserie Aluminium-Verre",name:"Menuiserie Aluminium-Verre"},
    {id:"Métiers de l'accueil",name:"Métiers de l'accueil"},
    {id:"Métiers de l'électricité et de ses environnements connectés",name:"Métiers de l'électricité et de ses environnements connectés"},
    {id:"Métiers de la coiffure",name:"Métiers de la coiffure"},
    {id:"Métiers de la mode - vêtements",name:"Logistique"},
    {id:"Métiers de la sécurité",name:"Métiers de la sécurité"},
    {id:"Métiers du commerce et de la vente",name:"Métiers du commerce et de la vente"},
    {id:"Métiers du cuir",name:"Métiers du cuir"},
    {id:"Métiers du Froid et des Énergies Renouvelables",name:"Métiers du Froid et des Énergies Renouvelables"},
    {id:"Métiers du pressing et de la blanchisserie",name:"Métiers du pressing et de la blanchisserie"},
    {id:"Métiers et arts de la pierre",name:"Métiers et arts de la pierre"},
    {id:"Microtechniques",name:"Microtechniques"},
    {id:"Modélisation et prototypage 3D",name:"Modélisation et prototypage 3D"},
    {id:"Optique lunetterie",name:"Optique lunetterie"},
    {id:"Organisation de transport de marchandises",name:"Organisation de transport de marchandises"},
    {id:"Ouvrage du bâtiment : métallerie",name:"Ouvrage du bâtiment : métallerie"},
    {id:"Perruquier posticheur",name:"Perruquier posticheur"},
    {id:"Photographie",name:"Photographie"},
    {id:"Pilote de ligne de production",name:"Pilote de ligne de production"},
    {id:"Plastiques et composites",name:"Plastiques et composites"},
    {id:"Poissonnier écailler traiteur",name:"Poissonnier écailler traiteur"},
    {id:"Procédés de la chimie, de l'eau et des papiers-cartons",name:"Procédés de la chimie, de l'eau et des papiers-cartons"},
    {id:"Productique mécanique",name:"Productique mécanique"},
    {id:"Prothèse dentaire",name:"Prothèse dentaire"},
    {id:"Réalisation de produits imprimés et plurimédia",name:"Réalisation de produits imprimés et plurimédia"},
    {id:"Réparation des carrosseries",name:"Réparation des carrosseries"},
    {id:"Services de proximité et vie locale",name:"Services de proximité et vie locale"},
    {id:"Systèmes numériques",name:"Systèmes numériques"},
    {id:"Technicien Gaz",name:"Technicien Gaz"},
    {id:"Technicien constructeur bois",name:"Technicien constructeur bois"},
    {id:"Technicien de maintenance de systèmes énergétiques et climatiques",name:"Technicien de maintenance de systèmes énergétiques et climatiques"},
    {id:"Technicien d'études du bâtiment",name:"Technicien d'études du bâtiment"},
    {id:"Technicien du froid et du conditionnement de l'air",name:"Technicien du froid et du conditionnement de l'air"},
    {id:"Technicien d'usinage",name:"Technicien d'usinage"},
    {id:"Technicien de fabrication bois et matériaux associés",name:"Technicien de fabrication bois et matériaux associés"},
    {id:"Technicien de maintenance de systèmes énergétiques et climatiques",name:"Technicien de maintenance de systèmes énergétiques et climatiques"},
    {id:"Technicien du bâtiment : organisation et réalisation du gros oeuvre",name:"Technicien du bâtiment : organisation et réalisation du gros oeuvre"},
    {id:"Technicien en appareillage orthopédique",name:"Technicien en appareillage orthopédique"},
    {id:"Technicien en chaudronnerie industrielle",name:"Technicien en chaudronnerie industrielle"},
    {id:"Technicien en installation des systèmes énergétiques et climatiques",name:"Technicien en installation des systèmes énergétiques et climatiques"},
    {id:"Technicien en prothèse dentaire",name:"Technicien en prothèse dentaire"},
    {id:"Technicien en réalisation de produits mécaniques",name:"Technicien en réalisation de produits mécaniques"},
    {id:"Technicien géomètre topographe",name:"Technicien géomètre topographe"},
    {id:"Technicien menuisier agenceur",name:"Technicien menuisier agenceur"},
    {id:"Technicien modeleur",name:"Technicien modeleur"},
    {id:"Technicien outilleur",name:"Technicien outilleur"},
    {id:"Techniques d'interventions sur installations nucléaires",name:"Techniques d'interventions sur installations nucléaires"},
    {id:"Traitements des matériaux",name:"Traitements des matériaux"},
    {id:"Transport",name:"Transport"},
    {id:"Transport fluvial",name:"Transport fluvial"},
    {id:"Travaux publics",name:"Travaux publics"},
    {id:"Vente",name:"Vente"},


  ]

  constructor(
    private route: ActivatedRoute,
    private personalDataService : PersonalDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    
  ) {  }


  ngOnInit() {
    this.personalData = this.route.snapshot.data['personalData'];
    this.createForm();
    
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

  attributeSpeciality(){

        this.dataList=this.possibleSpecialitiesTechno;
    // else (id=="Professionnelle") 
    // this.dataList=this.possibleSpecialitiesPro;
      
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
