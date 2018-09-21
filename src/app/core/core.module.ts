import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarkdownModule, MarkdownComponent, MarkdownPipe } from 'ngx-markdown';
import { TokenInterceptor } from './auth';
import { LoaderService } from './loader.service';
import { MessageModule } from './messages';
import { FuzzyPipe, LineBreaksPipe } from './pipes';
import { NotFoundComponent } from './not-found';
import { InternalErrorComponent } from './internal-error';
import { ErrorPageComponent } from './error-page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    MarkdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXPxwZpx9EiwarLAZ3yzUANK9D4q0X9cI',
    }),
  ],
  declarations: [
    FuzzyPipe,
    LineBreaksPipe,
    InternalErrorComponent,
    NotFoundComponent,
    ErrorPageComponent,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
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
