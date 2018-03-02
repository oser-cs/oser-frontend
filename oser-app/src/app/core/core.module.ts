import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';
import { Config } from '@app/config';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    FuzzyPipe,
    LineBreaksPipe,
  ],
  providers: [
    AuthService,
    AuthGuard,
    Config,
  ],
  exports: [
    MessageModule,
    FuzzyPipe,
    LineBreaksPipe,
    MarkdownComponent,
  ]
})
export class CoreModule { }
