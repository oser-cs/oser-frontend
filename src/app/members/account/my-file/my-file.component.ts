import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UploadComponent} from '../upload/upload.component'
import {PersonalData} from '../core'
@Component({
  selector: 'app-my-file',
  templateUrl: './my-file.component.html',
  styleUrls: ['./my-file.component.scss']
})
export class MyFileComponent implements OnInit {
    
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}
}
