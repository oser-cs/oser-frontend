import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visit, Participant, ParticipantService } from '../shared';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {

  @Input() visible: boolean;
  @Input() visit: Visit;
  @Input() userId: number;
  @Output() left: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();
  loading = false;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }

  clickModal(e): void {
    if (e.target === document.getElementById('leave-form')) {
      this.onClose();
    }
  }

  onClose() {
    this.closed.emit();
    this.visible = false;
  }

  onLeave() {
    const participant = this.visit.participants.find(
      p => p.user.id === this.userId
    );
    this.participantService.remove(participant).subscribe(
      resp => {
        alert('Ce sera bientôt envoyé par mail !');
        const index = this.visit.participants.indexOf(participant);
        this.visit.participants.splice(index, 1);
        this.onClose();
        this.left.emit();
      }
    );
  }
}
