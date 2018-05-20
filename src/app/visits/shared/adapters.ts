import { Visit, Place, Address, Country, Participant, Organizer } from './models';
import { UserAdapter } from 'app/core';


export class AddressAdapter {
  adapt(item: any): Address {
    return new Address({
      line1: item.line1,
      line2: item.line2,
      postCode: item.post_code,
      city: item.city,
      country: {
        name: item.country.name,
        code: item.country.code,
      },
    });
  }
}


export class PlaceAdapter {

  private addressAdapter: AddressAdapter;

  constructor() {
    this.addressAdapter = new AddressAdapter();
  }

  adapt(item: any): Place {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      address: item.address ? this.addressAdapter.adapt(item.address) : null,
    }
  }
}


export class ParticipantAdapter {

  private userAdapter = new UserAdapter();

  adapt(item: any): Participant {
    return {
      id: item.id,
      present: item.present,
      accepted: item.accepted,
      user: this.userAdapter.adapt(item.user),
      visitId: item.visit,
    }
  }
}


export class OrganizerAdapter {

  private userAdapter = new UserAdapter();

  adapt(item: any): Organizer {
    return {
      id: item.id,
      user: item.user ? this.userAdapter.adapt(item.user) : null,
    }
  }
}


export class SimpleVisitAdapter {

  private placeAdapter: PlaceAdapter;

  constructor() {
    this.placeAdapter = new PlaceAdapter();
  }

  adapt(item: any): Visit {
    const fromUserIds = (arr: number[]) => (arr || []).map(
      id => ({
        id: null,
        user: { id: id },
      })
    );
    const place = this.placeAdapter.adapt({name: item.place});
    return new Visit({
      id: item.id,
      title: item.title,
      summary: item.summary,
      description: item.description,
      place: place,
      date: new Date(item.date),
      passed: item.passed,
      deadline: new Date(item.deadline),
      registrationsOpen: item.registrations_open,
      image: item.image,
      participants: fromUserIds(item.participants),
      organizers: fromUserIds(item.organizers),
    })
  }
}


export class VisitAdapter {

  private placeAdapter = new PlaceAdapter();
  private participantAdapter = new ParticipantAdapter();
  private organizerAdapter = new OrganizerAdapter();

  adapt(item: any): Visit {
    const participants = item.participants.map(
      p => this.participantAdapter.adapt(p)
    );
    const organizers = item.organizers.map(
      o => this.organizerAdapter.adapt(o)
    );
    return new Visit({
      id: item.id,
      title: item.title,
      summary: item.summary,
      description: item.description,
      place: item.place ? this.placeAdapter.adapt(item.place) : null,
      date: new Date(item.date),
      passed: item.passed,
      deadline: new Date(item.deadline),
      registrationsOpen: item.registrations_open,
      image: item.image,
      attachedFiles: item.attached_files,
      factSheet: item.fact_sheet,
      participants: participants,
      organizers: organizers,
    });
  }
}
