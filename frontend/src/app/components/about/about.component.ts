import { Component } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
  })
  export class AboutComponent {
    constructor(public translate: TranslateService) {
      translate.setDefaultLang('ru');
    }

    switchLanguage(lang: string) {
      this.translate.use(lang);
    }
  }