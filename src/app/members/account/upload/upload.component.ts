import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import {StudentChartDialogComponent } from './dialog/studentChartDialog.component'
import {ParentalAuthDialogComponent} from './dialog/parentalAuthDialog.component'
import {ImageRightsDialogComponent} from './dialog/imageRightsDialog.component'
import { UploadService } from './upload.service'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openStudentChartDialog() {
    let dialogRef = this.dialog.open(StudentChartDialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
  public openParentalAuthDialog() {
    let dialogRef = this.dialog.open(ParentalAuthDialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
  public openImageRightsDialog() {
    let dialogRef = this.dialog.open(ImageRightsDialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
}