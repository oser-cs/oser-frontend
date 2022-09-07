import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-student-charter',
  templateUrl: './student-charter.component.html',
  styleUrls: ['./student-charter.component.scss']
})
export class StudentCharterComponent implements OnInit {
  
  state:boolean;

  constructor() { }

  ngOnInit() {
   
  }

  toggle(){
    this.state=!this.state;
  }

}
