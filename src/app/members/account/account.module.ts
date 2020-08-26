import { NgModule } from '@angular/core';


// Modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MomentModule } from 'ngx-moment';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { AccountRoutingModule } from './account-routing.module';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule,
  MatTableModule,
  MatDividerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatListModule,
  
} from '@angular/material';

// Components
import {AccountComponent} from './account.component'
import {MyDataComponent} from './my-data/my-data.component'
import {EditDataComponent} from './edit-data/edit-data.component'
import {MyFileComponent} from './my-file/my-file.component'
import {UploadComponent} from './upload/upload.component'
import { DialogComponent } from './upload/dialog/dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule,
    AgmCoreModule,
    CoreModule,
    SharedModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    // Material
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    
  ],
  declarations: [
    AccountComponent,
    MyDataComponent,
    EditDataComponent,
    MyFileComponent,
    UploadComponent,
    DialogComponent
  ],
  entryComponents:[DialogComponent]
})
export class AccountModule { }
