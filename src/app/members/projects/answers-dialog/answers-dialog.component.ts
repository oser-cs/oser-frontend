import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Participation, ParticipationService } from '../core';
import { Form } from 'app/dynamic-forms';

@Component({
  selector: 'app-answers-dialog',
  templateUrl: './answers-dialog.component.html',
  styleUrls: ['./answers-dialog.component.scss']
})
export class AnswersDialogComponent implements OnInit {

  form: Form;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.form = this.data.form || null;
  }

}
