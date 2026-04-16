import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <p class="eyebrow">{{ 'HOME.EYEBROW' | translate }}</p>
        <h1>{{ 'HOME.TITLE' | translate }}</h1>
        <p class="hero-text">{{ 'HOME.DESCRIPTION' | translate }}</p>

        <div class="hero-actions">
          <a routerLink="/forecast" class="hero-button">{{ 'HOME.NAV.FORECAST' | translate }}</a>
          <a routerLink="/collection-points" class="hero-button outlined">{{ 'HOME.NAV.COLLECTION_POINTS' | translate }}</a>
        </div>
      </div>

      <div class="hero-panel">
        <div class="weather-panel">
          <div class="weather-icon">🌊</div>
          <div>
            <div class="weather-label">{{ 'HOME.RISK_LEVEL' | translate }}</div>
            <div class="weather-value high">{{ 'HOME.RISK_HIGH' | translate }}</div>
          </div>
        </div>
        <div class="safety-card">
          <h2>{{ 'HOME.SAFETY_TITLE' | translate }}</h2>
          <ul>
            <li>{{ 'HOME.SAFETY_TIP1' | translate }}</li>
            <li>{{ 'HOME.SAFETY_TIP2' | translate }}</li>
            <li>{{ 'HOME.SAFETY_TIP3' | translate }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="quick-links-section">
      <h2>{{ 'HOME.QUICK_ACCESS' | translate }}</h2>
      <div class="quick-grid">
        <a routerLink="/forecast" class="quick-card">
          <span>{{ 'HOME.FORECAST_CARD' | translate }}</span>
        </a>
        <a routerLink="/collection-points" class="quick-card">
          <span>{{ 'HOME.COLLECTION_POINTS_CARD' | translate }}</span>
        </a>
        <a routerLink="/about" class="quick-card">
          <span>{{ 'HOME.ABOUT_CARD' | translate }}</span>
        </a>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
