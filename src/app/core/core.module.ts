import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarkdownModule, MarkdownComponent, MarkdownPipe } from 'ngx-markdown';
import { AuthService, AuthGuard, TokenInterceptor } from './auth';
import { LinkService } from './links';
import { GeocodingService } from './geocoding.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';
import { DocumentService, DocumentComponent } from './documents';

@NgModule({
  imports: [
    CommonModule,
    MessageModule,
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
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    LinkService,
    DocumentService,
    GeocodingService,
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
