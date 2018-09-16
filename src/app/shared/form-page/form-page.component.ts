import { Component, Input } from '@angular/core';

/** Container for building components that display a simple form (like login or registration) */
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  @Input() logo = true;
}
