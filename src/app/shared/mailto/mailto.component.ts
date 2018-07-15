import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.scss']
})
export class MailtoComponent {

  @Input() dest = 'contact@oser-cs.fr';
  @Input() subject = '';
  @Input() label: string;

  get href(): string {
    return `mailto:${this.dest}?subject=${this.subject}`;
  }

}
