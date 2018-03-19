import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';
import { AuthService } from './auth/auth.service';
import { LinkService } from './links';
import { AuthGuard } from './auth/auth-guard.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';

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
    LinkService,
  ],
  exports: [
    MessageModule,
    FuzzyPipe,
    LineBreaksPipe,
    MarkdownComponent,
  ]
})
export class CoreModule { }
