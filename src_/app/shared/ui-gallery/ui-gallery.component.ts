import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-gallery',
  templateUrl: './ui-gallery.component.html',
  styleUrls: ['./ui-gallery.component.scss']
})
export class UiGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.encodePreElements();
  }

  styles: any = ['info', 'success', 'warning', 'danger', 'primary', 'secondary', 'default'];

  element(className: string, elt: string = 'span'): string {
    return `<${elt} class="${className}">${className}</${elt}>`;
  }

  badgeHtml(style: string): string {
    return this.element(`badge badge-${style}`);
  }
  alertHtml(style: string): string {
    return this.element(`alert alert-${style}`, 'div');
  }
  buttonClass(style: string): string {
    return `btn-${style}`;
  }

  encodePreElements(): void {
    var pre = document.getElementsByTagName('code');
    for (let i = 0; i < pre.length; i++) {
      let encoded = this.htmlEncode(pre[i].innerHTML);
      pre[i].innerHTML = encoded;
    }
  };

  htmlEncode(value): string {
    let div = document.createElement('div');
    let text = document.createTextNode(value);
    div.appendChild(text);
    return div.innerHTML;
  }

}
