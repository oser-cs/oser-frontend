import { UserInfo } from 'app/core';

export interface Country {
  name: string;
  code: string;
}

export interface IAddress {
  line1: string;
  line2: string;
  postCode: string;
  city: string;
  country: Country;
}

export class Address {

  line1: string;
  line2: string;
  postCode: string;
  city: string;
  country: Country;

  constructor(opts: IAddress) {
    this.line1 = opts.line1;
    this.line2 = opts.line2;
    this.postCode = opts.postCode;
    this.city = opts.city;
    this.country = opts.country;
  }

  toString(): string {
    return [this.line1, this.line2, this.postCode, this.city, this.country.name]
      .filter(el => el)
      .join(', ');
  }
}

export interface Place {
  id: number;
  name: string;
  address: Address;
  description: string;
}

export interface Participant {
  id: number;
  present?: boolean;
  accepted?: boolean;
  user: UserInfo;
  visitId?: number;
}

export interface Organizer {
  id: number;
  user: UserInfo;
}

export class Visit {
  id: number;
  title: string;
  summary: string;
  description: string;
  place: Place | string;
  date: Date;
  passed: boolean;
  deadline: Date;
  registrationsOpen: boolean;
  image: string;
  factSheet: string;
  attachedFiles: any[];
  participants: Participant[];
  organizers: Organizer[];

  constructor(opts: {
    id: number,
    title: string,
    summary: string;
    description?: string,
    place: Place | string,
    date: Date,
    passed: boolean,
    deadline: Date,
    registrationsOpen: boolean,
    image: string;
    factSheet?: string;
    attachedFiles?: any[],
    participants?: Participant[];
    organizers?: Organizer[],
  }) {
    this.id = opts.id;
    this.title = opts.title || null;
    this.summary = opts.summary || null;
    this.description = opts.description || null;
    this.place = opts.place;
    this.date = opts.date;
    this.passed = opts.passed;
    this.deadline = opts.deadline;
    this.registrationsOpen = opts.registrationsOpen;
    this.image = opts.image;
    this.factSheet = opts.factSheet;
    this.attachedFiles = opts.attachedFiles || [];
    this.participants = opts.participants || [];
    this.organizers = opts.organizers || [];
  }

}
