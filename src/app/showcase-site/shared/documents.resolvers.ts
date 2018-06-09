import { Injectable } from '@angular/core';
import { DocumentResolver } from 'app/core';

@Injectable({
  providedIn: 'root',
})
export class MentionsResolver extends DocumentResolver {
  slug = 'mentions-legales';
}

@Injectable({
  providedIn: 'root',
})
export class DonateResolver extends DocumentResolver {
  slug = 'pourquoi-nous-soutenir';
}
