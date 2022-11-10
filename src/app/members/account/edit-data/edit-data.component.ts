import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {ActivatedRoute} from '@angular/router'
import { PersonalData,PersonalDataService } from '../core';
import { tap, mergeMap } from 'rxjs/operators';
import { AuthService } from 'app/core';
import {User} from 'app/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



export interface Nationality {
  id : string;
  name: string;
} 


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
  classType="";
  
  myControl = new FormControl();

 

  public possibleParentsStatus = [
    {id:"maried",name:"Vos parents vivent ensemble"},
    {id:"separated",name:"Vos parents vivent séparément"},
    {id:"monoparental",name:"Vous avez un seul parent"},
    {id:"noparents",name:"Vous ne dépendez pas de vos parents"},
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



  public possibleNationalities: Nationality[] = [
   {id:"AFG", name:"Afghane"},
   {id:"ALB", name:"Albanaise"}, 
   {id:"DZA", name:"Algérienne"}, 
   {id:"DEU", name:"Allemande"}, 
   {id:"USA", name:"Americaine"}, 
   {id:"AND", name:"Andorrane"}, 
   {id:"AGO", name:"Angolaise"}, 
   {id:"ATG", name:"Antiguaise-et-Barbudienne"}, 
   {id:"ARG", name:"Argentine"}, 
   {id:"ARM", name:"Armenienne"}, 
   {id:"AUS", name:"Australienne"}, 
   {id:"AUT", name:"Autrichienne"}, 
   {id:"AZE", name:"Azerbaïdjanaise"}, 
   {id:"BHS", name:"Bahamienne"}, 
   {id:"BHR", name:"Bahreinienne"}, 
   {id:"BGD", name:"Bangladaise"}, 
   {id:"BRB", name:"Barbadienne"}, 
   {id:"BEL", name:"Belge"}, 
  {id:"BLZ", name:"Belizienne"}, 
  {id:"BEN", name:"Béninoise"}, 
  {id:"BTN", name:"Bhoutanaise"}, 
  {id:"BLR", name:"Biélorusse"}, 
  {id:"MMR", name:"Birmane"}, 
  {id:"GNB", name:"Bissau-Guinéenne"}, 
  {id:"BOL", name:"Bolivienne"}, 
  {id:"BIH", name:"Bosnienne"}, 
  {id:"BWA", name:"Botswanaise"}, 
  {id:"BRA", name:"Brésilienne"}, 
  {id:"GBR", name:"Britannique"}, 
  {id:"BRN", name:"Brunéienne"}, 
  {id:"BGR", name:"Bulgare"}, 
  {id:"BFA", name:"Burkinabée"}, 
  {id:"BDI", name:"Burundaise"}, 
  {id:"KHM", name:"Cambodgienne"}, 
  {id:"CMR", name:"Camerounaise"}, 
  {id:"CAN", name:"Canadienne"}, 
  {id:"CPV", name:"Cap-verdienne"}, 
  {id:"CAF", name:"Centrafricaine"}, 
  {id:"CHL", name:"Chilienne"}, 
  {id:"CHN", name:"Chinoise"}, 
  {id:"CYP", name:"Chypriote"}, 
  {id:"COL", name:"Colombienne"},
  {id:"COM", name:"Comorienne"},
  {id:"COG", name:"Congolaise"},
  {id:"COD", name:"Congolaise"},
  {id:"COK", name:"Cookienne"},
  {id:"CRI", name:"Costaricaine"},
  {id:"HRV", name:"Croate"},
  {id:"CUB", name:"Cubaine"},
  {id:"DNK", name:"Danoise"},
  {id:"DJI", name:"Djiboutienne"},
  {id:"DOM", name:"Dominicaine"},
  {id:"DMA", name:"Dominiquaise"},
  {id:"EGY", name:"Égyptienne"},
  {id:"ARE", name:"Émirienne"},
  {id:"GNQ", name:"Équato-guineenne"},
  {id:"ECU", name:"Équatorienne"},
  {id:"ERI", name:"Érythréenne"},
  {id:"ESP", name:"Espagnole"},
  {id:"TLS", name:"Est-timoraise"},
  {id:"EST", name:"Estonienne"},
  {id:"ETH", name:"Éthiopienne"},
  {id:"FJI", name:"Fidjienne"},
  {id:"FIN", name:"Finlandaise"},
  {id:"FRA", name:"Française"},
  {id:"GAB", name:"Gabonaise"},
  {id:"GMB", name:"Gambienne"},
  {id:"GEO", name:"Georgienne"},
  {id:"GHA", name:"Ghanéenne"},
  {id:"GRD", name:"Grenadienne"},
  {id:"GTM", name:"Guatémaltèque"},
  {id:"GIN", name:"Guinéenne"},
  {id:"GUY", name:"Guyanienne"},
  {id:"HTI", name:"Haïtienne"},
  {id:"GRC", name:"Hellénique"},
  {id:"HND", name:"Hondurienne"},
  {id:"HUN", name:"Hongroise"},
  {id:"IND", name:"Indienne"},
  {id:"IDN", name:"Indonésienne"},
  {id:"IRQ", name:"Irakienne"},
  {id:"IRN", name:"Iranienne"},{id:"IRL", name:"Irlandaise"},
  {id:"ISL", name:"Islandaise"},
  {id:"ISR", name:"Israélienne"},
  {id:"ITA", name:"Italienne"},
  {id:"CIV", name:"Ivoirienne"},
  {id:"JAM", name:"Jamaïcaine"},
  {id:"JPN", name:"Japonaise"},
  {id:"JOR", name:"Jordanienne"},
  {id:"KAZ", name:"Kazakhstanaise"},
  {id:"KEN", name:"Kenyane"},
  {id:"KGZ", name:"Kirghize"},
  {id:"KIR", name:"Kiribatienne"},{id:"KNA", name:"Kittitienne"},{id:"KWT", name:"Koweïtienne"},{id:"LAO", name:"Laotienne"},{id:"LSO", name:"Lesothane"},{id:"LVA", name:"Lettone"},{id:"LBN", name:"Libanaise"},{id:"LBR", name:"Libérienne"},{id:"LBY", name:"Libyenne"},{id:"LIE", name:"Liechtensteinoise"},{id:"LTU", name:"Lituanienne"},{id:"LUX", name:"Luxembourgeoise"},{id:"MKD", name:"Macédonienne"},{id:"MYS", name:"Malaisienne"},{id:"MWI", name:"Malawienne"},{id:"MDV", name:"Maldivienne"},{id:"MDG", name:"Malgache"},{id:"MLI", name:"Maliennes"},{id:"MLT", name:"Maltaise"},{id:"MAR", name:"Marocaine"},{id:"MHL", name:"Marshallaise"},{id:"MUS", name:"Mauricienne"},{id:"MRT", name:"Mauritanienne"},{id:"MEX", name:"Mexicaine"},{id:"FSM", name:"Micronésienne"},{id:"MDA", name:"Moldave"},{id:"MCO", name:"Monegasque"},{id:"MNG", name:"Mongole"},{id:"MNE", name:"Monténégrine"},{id:"MOZ", name:"Mozambicaine"},{id:"NAM", name:"Namibienne"},{id:"NRU", name:"Nauruane"},{id:"NLD", name:"Néerlandaise"},{id:"NZL", name:"Néo-Zélandaise"},
  {id:"NPL", name:"Népalaise"},{id:"NIC", name:"Nicaraguayenne"},{id:"NGA", name:"Nigériane"},{id:"NER", name:"Nigérienne"},{id:"NIU", name:"Niuéenne"},{id:"PRK", name:"Nord-coréenne"},{id:"NOR", name:"Norvégienne"},{id:"OMN", name:"Omanaise"},{id:"UGA", name:"Ougandaise"},{id:"UZB", name:"Ouzbéke"},{id:"PAK", name:"Pakistanaise"},{id:"PLW", name:"Palaosienne"},{id:"PSE", name:"Palestinienne"},{id:"PAN", name:"Panaméenne"},{id:"PNG", name:"Papouane-Néo-Guinéenne"},{id:"PRY", name:"Paraguayenne"},{id:"PER", name:"Péruvienne"},{id:"PHL", name:"Philippine"},{id:"POL", name:"Polonaise"},{id:"PRT", name:"Portugaise"},{id:"QAT", name:"Qatarienne"},{id:"ROU", name:"Roumaine"},{id:"RUS", name:"Russe"},{id:"RWA", name:"Rwandaise"},{id:"LCA", name:"Saint-Lucienne"},{id:"SMR", name:"Saint-Marinaise"},{id:"VCT", name:"Saint-Vincentaise"},{id:"SLB", name:"Salomonaise"},{id:"SLV", name:"Salvadorienne"},{id:"WSM", name:"Samoane"},{id:"STP", name:"Santoméenne"},{id:"SAU", name:"Saoudienne"},{id:"SEN", name:"Sénégalaise"},{id:"SRB", name:"Serbe"},{id:"SYC", name:"Seychelloise"},{id:"SLE", name:"Sierra-Léonaise"},{id:"SGP", name:"Singapourienne"},{id:"SVK", name:"Slovaque"},{id:"SVN", name:"Slovène"},{id:"SOM", name:"Somalienne"},{id:"SDN", name:"Soudanaise"},{id:"LKA", name:"Sri-Lankaise"},{id:"ZAF", name:"Sud-Africaine"},{id:"KOR", name:"Sud-Coréenne"},{id:"SSD", name:"Sud-Soudanaise"},{id:"SWE", name:"Suédoise"},{id:"CHE", name:"Suisse"},{id:"SUR", name:"Surinamaise"},{id:"SWZ", name:"Swazie"},{id:"SYR", name:"Syrienne"},{id:"TJK", name:"Tadjike"},{id:"TZA", name:"Tanzanienne"},{id:"TCD", name:"Tchadienne"},{id:"CZE", name:"Tchèque"},{id:"THA", name:"Thaïlandaise"},{id:"TGO", name:"Togolaise"},{id:"TON", name:"Tonguienne"},{id:"TTO", name:"Trinidadienne"},{id:"TUN", name:"Tunisienne"},{id:"TKM", name:"Turkmène"},{id:"TUR", name:"Turque"},{id:"TUV", name:"Tuvaluane"},{id:"UKR", name:"Ukrainienne"},{id:"URY", name:"Uruguayenne"},{id:"VUT", name:"Vanuatuane"},{id:"VAT", name:"Vaticane"},{id:"VEN", name:"Vénézuélienne"},{id:"VNM", name:"Vietnamienne"},{id:"YEM", name:"Yéménite"},{id:"ZMB", name:"Zambienne"},{id:"ZWE", name:"Zimbabwéenne"}
]

  public possibleSchools = [
    {id:"Jean Perrin (Longjumeau)", name:"Jean Perrin (Longjumeau)"},
    {id:"Robert Doisneau (Corbeil-Essonnes)",name:"Robert Doisneau (Corbeil-Essonnes)"},
    {id:"Henri Matisse (Montreuil)",name:"Henri Matisse (Montreuil)"},
    {id:"Jean Jaurès (Montreuil)",name:"Jean Jaurès (Montreuil)"},
    {id:"Charles Péguy (Bobigny)",name:"Charles Péguy (Bobigny)"},
    {id:"Jean Jaurès (Chatenay-Malabry)",name:"Jean Jaurès (Chatenay-Malabry)"},
    {id:"Parc des Loges (Evry)",name:"Parc des Loges (Evry)"},
    {id:"Jean Jaurès (Argenteuil)",name:"Jean Jaurès (Argenteuil)"},
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


  public possibleSpecialitiesGeneral = [
    {id:"Aucun",name:"Tu es dans une filière générale, tu n'as pas besoin de remplir cette case."},

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
  filteredOptions: Observable<Nationality[]>;

  ngOnInit() {
    this.personalData = this.route.snapshot.data['personalData'];
    this.createForm();
    this.classType=this.personalData.classType;
    
  }

  public _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let entryNatList : Array<string>;
    for (let nationality of this.possibleNationalities)
    {
      entryNatList.push(nationality.name);
    }
 return entryNatList.filter(option => option.toLowerCase().includes(filterValue));
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

  setSpeciality(){
  if (this.classType=="Technologique")
        {
         return this.possibleSpecialitiesTechno;
        }
  else if (this.classType=="Professionnelle") 
      {
     return this.possibleSpecialitiesPro;
       }
  else (this.classType=="General") 
      {
         return this.possibleSpecialitiesGeneral;
       }
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
