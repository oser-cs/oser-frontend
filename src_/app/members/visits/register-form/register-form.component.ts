import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visit, Participant, ParticipantService } from '../shared';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() visible: boolean;
  @Input() visit: Visit;
  @Input() userId: number;
  @Output() participate: EventEmitter<Participant> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();
  loading = false;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }

  clickModal(e): void {
    if (e.target === document.getElementById('register-form')) {
      this.onClose();
    }
  }

  onClose() {
    this.closed.emit();
    this.visible = false;
  }

  onParticipate(): void {
    this.loading = true;
    this.participantService.add(this.visit.id, this.userId).subscribe(
      (participant: Participant) => {
        this.loading = false;
        this.participate.emit(participant);
        this.onClose();
      }
    );
  }

}
