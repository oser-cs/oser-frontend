import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() values: string[];
  @Input() title: string;
  current: string;
  @Output() onSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.current = null;
  }

  select(value: string): void {
    if (this.current === value) {
      this.current = null;
    } else {this.current = value;}
    this.onSelect.emit(this.current);
  }

}
