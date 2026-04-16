import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="brand-block">
          <div class="brand-logo">MK</div>
          <div>
            <div class="brand-name">{{ 'APP.BRAND_NAME' | translate }}</div>
            <div class="brand-tag">{{ 'APP.BRAND_TAG' | translate }}</div>
          </div>
        </div>

        <div class="top-controls">
          <nav class="main-nav">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ 'APP.NAV_HOME' | translate }}</a>
            <a routerLink="/forecast" routerLinkActive="active">{{ 'APP.NAV_FORECAST' | translate }}</a>
            <a routerLink="/collection-points" routerLinkActive="active">{{ 'APP.NAV_COLLECTION_POINTS' | translate }}</a>
            <a routerLink="/about" routerLinkActive="active">{{ 'APP.NAV_ABOUT' | translate }}</a>
          </nav>

          <div class="lang-switch">
            <button type="button" (click)="switchLanguage('ru')" [class.active]="translate.currentLang === 'ru'">RU</button>
            <button type="button" (click)="switchLanguage('kk')" [class.active]="translate.currentLang === 'kk'">KK</button>
          </div>
        </div>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="app-footer">
        <span>{{ 'APP.FOOTER_COPYRIGHT' | translate }}</span>
        <span>{{ 'APP.FOOTER_DESCRIPTION' | translate }}</span>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('ru');
    translate.use('ru');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
