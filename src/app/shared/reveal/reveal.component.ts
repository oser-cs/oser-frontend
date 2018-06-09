import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent {

  @Input() content: string;
  @Input() label = 'Révéler';
  revealed = false;

}
