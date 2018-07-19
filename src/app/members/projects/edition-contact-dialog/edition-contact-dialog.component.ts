import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Edition } from '../core';

@Component({
  selector: 'app-edition-contact-dialog',
  templateUrl: './edition-contact-dialog.component.html',
  styleUrls: ['./edition-contact-dialog.component.scss']
})
export class EditionContactDialogComponent implements OnInit {

  edition: Edition;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.edition = this.data.edition;
  }

}
