import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DocumentService } from './document.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {

  @Input() slug: string;
  @Input() titleLevel = 1;
  content: string;
  docSub: any;

  constructor(
    private documentService: DocumentService,
  ) { }

  ngOnInit() {
    const options = { titleLevel: this.titleLevel };
    this.docSub = this.documentService.get(this.slug, options).subscribe(
      content => this.content = content,
      e => console.log(e)
    );
  }

  ngOnDestroy() {
    if (this.docSub) {
      this.docSub.unsubscribe();
    }
  }

}
