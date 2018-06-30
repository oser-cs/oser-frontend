import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Edition } from '../core';


@Component({
  selector: 'app-unregister-dialog',
  templateUrl: './unregister-dialog.component.html',
  styleUrls: ['./unregister-dialog.component.scss']
})
export class UnregisterDialogComponent implements OnInit {

  edition: Edition;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.edition = this.data.edition;
  }

}
