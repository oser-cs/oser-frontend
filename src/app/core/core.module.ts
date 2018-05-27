import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarkdownModule, MarkdownComponent, MarkdownPipe } from 'ngx-markdown';
import { AuthService, AuthGuard, TokenInterceptor } from './auth';
import { LinkService } from './links';
import { GeocodingService, MapsAPIResolver } from './geocoding.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';
import { DocumentService } from './document.service';
import { ErrorService } from './error.service';
import { InternalErrorComponent } from './internal-error';

@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    FuzzyPipe,
    LineBreaksPipe,
    InternalErrorComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    LinkService,
    DocumentService,
    GeocodingService,
    MapsAPIResolver,
    ErrorService,
  ],
  exports: [
    MessageModule,
    FuzzyPipe,
    LineBreaksPipe,
    MarkdownComponent,
    MarkdownPipe,
  ]
})
export class CoreModule { }
