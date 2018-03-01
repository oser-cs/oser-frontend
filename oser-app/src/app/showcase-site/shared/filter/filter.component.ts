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
  @Input() countContains: any[];

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

  numberOf(value: string): number {
    if (this.countContains) {
      return this.countContains.filter(x => x.includes(value)).length;
    }
    return 0;
  }

  get counted(): boolean {
    return (this.countContains !== null);
  }

}
