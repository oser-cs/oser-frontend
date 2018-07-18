import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() state: boolean = false;
  @Input() labelOn: string;
  @Input() labelOff: string;
  @Input() classOn: string;
  @Input() classOff: string;
  @Input() baseClassName: string = "";
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  get label(): string {
    if (this.state) { return this.labelOn; } else { return this.labelOff; }
  }

  get className(): string {
    if (this.state) { return this.classOn; } else { return this.classOff; }
  }

  toggle(): void {
    this.state = !this.state;
    this.onChange.emit(this.state);
  }

}
