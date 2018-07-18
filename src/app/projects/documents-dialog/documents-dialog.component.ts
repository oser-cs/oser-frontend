import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { File } from 'app/dynamic-forms';
import { EditionService, Recipient } from '../core';

@Component({
  selector: 'app-documents-dialog',
  templateUrl: './documents-dialog.component.html',
  styleUrls: ['./documents-dialog.component.scss']
})
export class DocumentsDialogComponent implements OnInit {

  editionId: number;
  documents: File[];
  deadline: Date;
  recipient: Recipient;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private editionService: EditionService,
  ) { }

  ngOnInit() {
    this.editionId = this.data.editionId;
    this.documents = this.data.documents || [];
    this.deadline = this.data.deadline;
    this.recipient = this.data.recipient;
  }

  get downloadUrl(): string {
    return this.editionService.getDownloadUrl(this.editionId);
  }

}
