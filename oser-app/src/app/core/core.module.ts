import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { MessageModule } from './messages';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthService,
  ],
  exports: [
    MessageModule,
  ]
})
export class CoreModule { }
