import { User, UserAdapter, IAdapter } from 'app/core';

export class PersonnalDataSchema {
    user : User;
    firstName:string;
    lastName: string;
    gender: string;
    nationality: string;
    adressNumber:string;
    street:string;
    zipCode:string;
    city:string;
    personnalPhone:string;
    parentsPhone:string;
    parentsEmail:string;
    school:string;
    grade:string;
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

export class PersonnalDataAdapter implements IAdapter<PersonnalData> {

    private userAdapter = new UserAdapter();

  adapt(data: any): PersonnalData {
    
    return new PersonnalData({
        user: data.user,
        firstName: data.user.first_name,
        lastName: data.user.last_name,
        gender: data.gender,
        nationality : data.nationality,
        adressNumber: data.adressNumber,
        street:data.street,
        zipCode:data.zipCode,
        city:data.city,
        personnalPhone:data.personnalPhone,
        parentsPhone:data.parentsPhone,
        parentsEmail:data.parentsEmail,
        school:data.school,
        grade:data.grade,
        specialTeaching:data.specialTeaching,
        scholarship:data.scholarship,
        fatherActivity:data.fatherActivity,
        motherActivity:data.motherActivity,
        parentsStatus:data.parentsStatus,
        dependantsNumber:data.dependantsNumber
    });
  }

  encode(obj: PersonnalData): any {
    return {
        gender: obj.gender,
        nationality: obj.nationality,
        adressNumber: obj.adressNumber,
        street:obj.street,
        zipCode:obj.zipCode,
        city:obj.city,
        personnalPhone:obj.personnalPhone,
        parentsPhone:obj.parentsPhone,
        parentsEmail:obj.parentsEmail,
        school:obj.school,
        grade:obj.grade,
        specialTeaching:obj.specialTeaching,
        scholarship:obj.scholarship,
        fatherActivity:obj.fatherActivity,
        motherActivity:obj.motherActivity,
        parentsStatus:obj.parentsStatus,
        dependantsNumber:obj.dependantsNumber
    }
  }
}
