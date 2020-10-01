import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
//Components
import { UploadComponent } from './upload.component'
import {StudentChartDialogComponent} from './dialog/studentChartDialog.component'
import {ImageRightsDialogComponent} from './dialog/imageRightsDialog.component'
import {ParentalAuthDialogComponent} from './dialog/parentalAuthDialog.component'
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { UploadService } from './upload.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [UploadService],
  entryComponents : [ParentalAuthDialogComponent,ImageRightsDialogComponent,StudentChartDialogComponent]
})
export class UploadModule {}