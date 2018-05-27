import { Injectable } from '@angular/core';
import { DocumentResolver } from 'app/core';

@Injectable()
export class MentionsResolver extends DocumentResolver {
  slug = 'mentions-legales';
}

@Injectable()
export class DonateResolver extends DocumentResolver {
  slug = 'pourquoi-nous-soutenir';
}
