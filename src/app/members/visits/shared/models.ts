import { Address, UserInfo } from 'app/core';


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
  place: Place;
  date: Date;
  startTime: Date;
  endTime: Date;
  meetingPlace: string;
  passed: boolean;
  deadline: Date;
  registrationsOpen: boolean;
  image: string;
  factSheet: string;
  contextSheet: string;
  permissionSheet: string;
  participants: Participant[];
  organizers: Organizer[];

  constructor(opts: {
    id: number,
    title: string,
    summary: string;
    description?: string,
    place: Place,
    date: Date,
    startTime: Date,
    endTime: Date,
    passed: boolean,
    meetingPlace?: string;
    deadline: Date,
    registrationsOpen: boolean,
    image: string;
    factSheet?: string;
    contextSheet?: string;
    permissionSheet?: string;
    participants?: Participant[];
    organizers?: Organizer[],
  }) {
    this.id = opts.id;
    this.title = opts.title || null;
    this.summary = opts.summary || null;
    this.description = opts.description || null;
    this.place = opts.place;
    this.date = opts.date;
    this.startTime = opts.startTime;
    this.endTime = opts.endTime;
    this.passed = opts.passed;
    this.meetingPlace = opts.meetingPlace;
    this.deadline = opts.deadline;
    this.registrationsOpen = opts.registrationsOpen;
    this.image = opts.image;
    this.factSheet = opts.factSheet;
    this.contextSheet = opts.contextSheet;
    this.permissionSheet = opts.permissionSheet;
    this.participants = opts.participants || [];
    this.organizers = opts.organizers || [];
  }

  get address(): string {
    if (this.place.address) {
      // Preprend the place's name for better geocoding results
      return this.place.name + ', ' + this.place.address.toString();
    } else {
      return this.place.name;
    }
  }

}
