import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownComponent, MarkdownPipe } from 'ngx-markdown';
import { AuthService } from './auth/auth.service';
import { LinkService } from './links';
import { AuthGuard } from './auth/auth-guard.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';
import { DocumentService, DocumentComponent } from './documents';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    FuzzyPipe,
    LineBreaksPipe,
    DocumentComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    LinkService,
    DocumentService,
  ],
  exports: [
    MessageModule,
    FuzzyPipe,
    LineBreaksPipe,
    MarkdownComponent,
    MarkdownPipe,
    DocumentComponent,
  ]
})
export class CoreModule { }
