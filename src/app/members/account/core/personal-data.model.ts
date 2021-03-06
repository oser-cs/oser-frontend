import { User, UserAdapter, IAdapter } from 'app/core';


export class PersonalDataSchema {
    
    
    user_id: string;
    url : string;
    year: string;
    registration: Registration;
    firstName:string;
    lastName: string;
    gender: string;
    nationality: string;
    addressNumber:number;
    street:string;
    zipCode:number;
    city:string;
    personalPhone:string;
    parentsPhone:string;
    parentsEmail:string;
    school:string;
    grade:string;
    classType:string;
    specialTeaching:string;
    scholarship:string;
    fatherActivity:string;
    motherActivity:string;
    parentsStatus:string;
    dependantsNumber:number;
}

class RegistrationSchema {
    id: Number;
    submitted: string;
    validated: boolean;
}


export class Registration extends RegistrationSchema {

  constructor(args: RegistrationSchema) {
    super();
    Object.assign(this, args);
  }
}

export class PersonalData extends PersonalDataSchema {

  constructor(args: PersonalDataSchema) {
    super();
    Object.assign(this, args);
  }
}

export class PersonalDataAdapter implements IAdapter<PersonalData> {

    private userAdapter = new UserAdapter();

  adapt(data: any): PersonalData {
    return new PersonalData({
        url : data.url?data.url:'',
        user_id: data.user_id?data.user_id:'',
        registration:data.registration?data.registration:{id: 0,submitted: '',validated: false},
        year:data.year?data.year:'',
        firstName: data.user.first_name?data.user.first_name:'',
        lastName: data.user.last_name?data.user.last_name:'',
        gender: data.gender?data.gender:'',
        nationality : data.nationality?data.nationality:'',
        addressNumber: data.addressNumber?data.addressNumber:'',
        street:data.street?data.street:'',
        zipCode:data.zipCode?data.zipCode:'',
        city:data.city?data.city:'',
        personalPhone:data.personalPhone?data.personalPhone:'',
        parentsPhone:data.parentsPhone?data.parentsPhone:'',
        parentsEmail:data.parentsEmail?data.parentsEmail:'',
        school:data.school?data.school:'',
        grade:data.grade?data.grade:'',
        classType : data.classType?data.classType:'',
        specialTeaching:data.specialTeaching?data.specialTeaching:'',
        scholarship:data.scholarship?data.scholarship:'',
        fatherActivity:data.fatherActivity?data.fatherActivity:'',
        motherActivity:data.motherActivity?data.motherActivity:'',
        parentsStatus:data.parentsStatus?data.parentsStatus:'',
        dependantsNumber:data.dependantsNumber?data.dependantsNumber:''
    });
  }

  encode(obj: PersonalData): any {
    return {
        user_id: obj.user_id,
        url : obj.url,
        gender: obj.gender,
        nationality: obj.nationality,
        addressNumber: obj.addressNumber,
        street:obj.street,
        zipCode:obj.zipCode,
        city:obj.city,
        personalPhone:obj.personalPhone,
        parentsPhone:obj.parentsPhone,
        parentsEmail:obj.parentsEmail,
        school:obj.school,
        grade:obj.grade,
        classType:obj.classType,
        specialTeaching:obj.specialTeaching,
        scholarship:obj.scholarship,
        fatherActivity:obj.fatherActivity,
        motherActivity:obj.motherActivity,
        parentsStatus:obj.parentsStatus,
        dependantsNumber:obj.dependantsNumber
    }
  }
}
