import { Place } from './place.model';

export class Visit {
  id: number;
  title: string;
  summary: string;
  description: string;
  place: Place;
  date: Date;
  passed: boolean;
  deadline: Date;
  registrationsOpen: boolean;
  image: string;
  factSheet: string;
  participants: string[] = [];
  organizers: any[] = [];

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
