import { Injectable } from '@angular/core';
import { Address, AddressAdapter } from 'app/core';

class PersonnalDataSchema {
    gender: string;
    adressNumber:string;
    street:string;
    zipCode:string;
    city:string;
    personnalPhone:string;
    parentsPhone:string;
    parentsEmail:string;
    school:string;
    grade:string;
    section:string;
    specialTeaching:string;
    scholarship:string;
    fatherActivity:string;
    motherActivity:string;
    parentsStatus:string;
    dependantsNumber:number;
}

export class PersonnalData extends PersonnalDataSchema {

  constructor(args: PersonnalDataSchema) {
    super();
    Object.assign(this, args);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonnalDataAdapter {

  constructor(private addressAdapter: PersonnalDataAdapter) { }

  encode(obj: PersonnalData): any {
    return {
        gender: obj.gender,
        adressNumber: obj.adressNumber,
        street:obj.street,
        zipCode:obj.zipCode,
        city:obj.city,
        personnalPhone:obj.personnalPhone,
        parentsPhone:obj.parentsPhone,
        parentsEmail:obj.parentsEmail,
        school:obj.school,
        grade:obj.grade,
        section:obj.section,
        specialTeaching:obj.specialTeaching,
        scholarship:obj.scholarship,
        fatherActivity:obj.fatherActivity,
        motherActivity:obj.motherActivity,
        parentsStatus:obj.parentsStatus,
        dependantsNumber:obj.dependantsNumber
    }
  }
}
