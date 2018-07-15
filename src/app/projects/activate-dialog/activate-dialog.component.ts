import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Edition } from '../core';

@Component({
  selector: 'app-activate-dialog',
  templateUrl: './activate-dialog.component.html',
  styleUrls: ['./activate-dialog.component.scss']
})
export class ActivateDialogComponent implements OnInit {

  edition: Edition;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.edition = this.data.edition;
  }

}
