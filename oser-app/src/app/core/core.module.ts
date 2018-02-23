import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FuzzyPipe,
    LineBreaksPipe,
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  exports: [
    MessageModule,
    FuzzyPipe,
    LineBreaksPipe,
  ]
})
export class CoreModule { }
