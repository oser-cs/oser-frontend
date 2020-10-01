import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UploadModule } from '../upload/upload.module'
import {UploadComponent} from '../upload/upload.component'
import {MyFileComponent} from './my-file.component'

@NgModule({
    imports : [UploadModule],
    declarations: [],
    entryComponents:[UploadComponent]
  
})
export class MyFileModule {}