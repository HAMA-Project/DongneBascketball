import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '동네 농구';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('basketball',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/basketball.svg'));
    this.matIconRegistry.addSvgIcon('naver',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/naver_logo.svg'));
    this.matIconRegistry.addSvgIcon('google',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/google_logo.svg'));
    this.matIconRegistry.addSvgIcon('kakao',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kakao_logo.svg'));
  }
}
