import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-expert-location',
  template:`
    <iframe [src]="getSafeUrl(src)"></iframe>
  `,
  styleUrls: ['./expert-location.component.scss']
})

export class ExpertLocationComponent implements OnInit {
  srcURL: string  = "https://www.google.com/maps/embed/v1/search?key=AIzaSyAOAubYNyD4MZw8jESl-B__4VMeCj04AzU&q="
  location: string = '960 Markham Rd, Scarborough, ON M1H 2Y4, Canada';
  src: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeUrl(src: string) {
    let dataSrc = this.location.split(" ").join("+");
    this.src = this.srcURL + dataSrc;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
