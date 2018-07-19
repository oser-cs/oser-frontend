import { Component, Input } from '@angular/core';
import { Recipient } from '../core';

@Component({
  selector: 'app-documents-recipient',
  templateUrl: './documents-recipient.component.html',
  styleUrls: ['./documents-recipient.component.scss']
})
export class DocumentsRecipientComponent {

  @Input() recipient: Recipient;
  @Input() deadline: Date;

}
