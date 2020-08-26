import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { DialogComponent } from './dialog/dialog.component'
import { UploadService } from './upload.service'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openStudentChartDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
  public openParentalAuthDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
  public openImageRightsDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
}