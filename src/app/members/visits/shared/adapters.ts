import { Visit, Place, Participant, Organizer } from './models';
import { UserAdapter, AddressAdapter, IAdapter } from 'app/core';


export class PlaceAdapter implements IAdapter<Place> {

  private addressAdapter = new AddressAdapter();

  adapt(data: any): Place {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      address: data.address ? this.addressAdapter.adapt(data.address) : null,
    }
  }
}


export class ParticipantAdapter implements IAdapter<Participant> {

  private userAdapter = new UserAdapter();

  adapt(data: any): Participant {
    return {
      id: data.id,
      present: data.present,
      accepted: data.accepted,
      user: this.userAdapter.adapt(data.user),
      visitId: data.visit,
    }
  }
}


export class OrganizerAdapter implements IAdapter<Organizer> {

  private userAdapter = new UserAdapter();

  adapt(data: any): Organizer {
    return {
      id: data.id,
      user: data.user ? this.userAdapter.adapt(data.user) : null,
    }
  }
}


export class SimpleVisitAdapter implements IAdapter<Visit> {

  private placeAdapter = new PlaceAdapter();
  private participantAdapter = new ParticipantAdapter();

  adapt(data: any): Visit {
    const fromUserIds = (arr: number[]) => (arr || []).map(
      id => ({
        id: null,
        user: { id: id },
        visitId: data.id,
      })
    );
    const participants = data.participants.map(
      p => this.participantAdapter.adapt(p)
    );
    const place = this.placeAdapter.adapt({ name: data.place });
    return new Visit({
      id: data.id,
      title: data.title,
      summary: data.summary,
      description: data.description,
      place: place,
      date: new Date(data.date),
      startTime: new Date(Date.parse(`1 Jan 2000 ${data.start_time}`)),
      endTime: new Date(Date.parse(`1 Jan 2000 ${data.end_time}`)),
      passed: data.passed,
      deadline: new Date(data.deadline),
      registrationsOpen: data.registrations_open,
      image: data.image,
      participants: participants,
      organizers: fromUserIds(data.organizers),
    })
  }
}


export class VisitAdapter implements IAdapter<Visit> {

  private placeAdapter = new PlaceAdapter();
  private participantAdapter = new ParticipantAdapter();
  private organizerAdapter = new OrganizerAdapter();

  adapt(data: any): Visit {
    const participants = data.participants.map(
      p => this.participantAdapter.adapt(p)
    );
    const organizers = data.organizers.map(
      o => this.organizerAdapter.adapt(o)
    );
    return new Visit({
      id: data.id,
      title: data.title,
      summary: data.summary,
      description: data.description,
      place: data.place ? this.placeAdapter.adapt(data.place) : null,
      date: new Date(data.date),
      startTime: new Date(Date.parse(`1 Jan 2000 ${data.start_time}`)),
      endTime: new Date(Date.parse(`1 Jan 2000 ${data.end_time}`)),
      passed: data.passed,
      meetingPlace: data.meeting,
      deadline: new Date(data.deadline),
      registrationsOpen: data.registrations_open,
      image: data.image,
      factSheet: data.fact_sheet,
      contextSheet: data.context_sheet,
      permissionSheet: data.permission,
      participants: participants,
      organizers: organizers,
    });
  }
}
