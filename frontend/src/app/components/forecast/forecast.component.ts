import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
    @Input() regionId: string = '';
    forecastData: any = null;
    liveWeatherData: any = { cities: [], regions: [] };
    loading: boolean = false;
    error: string = '';

constructor(
    public translate: TranslateService,
    private http: HttpClient
  ) {
      translate.setDefaultLang('ru');
    }

    switchLanguage(lang: string) {
      this.translate.use(lang);
    }

    ngOnInit() {
      this.loadForecast();
    }

    private getApiUrl(): string {
      const host = window.location.hostname;
      const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host.startsWith('192.168.') || host.startsWith('10.') || host.startsWith('172.');
      if (isLocalHost) {
        return 'http://localhost:3003';
      }
      return 'https://meteo-q91g8fwlu-asikaslanasdfghjkl-3241s-projects.vercel.app';
    }

    loadForecast() {
      this.loading = true;
      this.error = '';

      // Получение данных с backend API
      const apiUrl = `${this.getApiUrl()}/api/flood-data`;
      this.http.get(apiUrl).subscribe({
        next: (data: any) => {
          this.forecastData = {
            regionId: this.regionId || '1',
            forecastDate: new Date().toISOString().split('T')[0],
            riskLevel: this.determineRiskLevel(data),
            notes: this.generateNotes(data),
            sources: [
              {
                name: "МЧС РК",
                url: "https://www.gov.kz/memleket/entities/emergency?lang=ru"
              },
              {
                name: "Казгидромет",
                url: "https://www.kazhydromet.kz"
              }
            ],
            realData: data
          };

          // Сохраняем живые метеоданные
          if (data.liveWeather) {
            this.liveWeatherData = data.liveWeather;
          }

          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading forecast data:', err);
          this.error = this.translate.instant('ERROR_LOADING');
          // Fallback to mock data
          this.loadMockData();
        }
      });
    }

    private determineRiskLevel(data: any): string {
      const totalItems = (data.mchs?.length || 0) + (data.kazhydromet?.length || 0);
      if (totalItems > 5) return 'HIGH';
      if (totalItems > 2) return 'MEDIUM';
      return 'LOW';
    }

    private generateNotes(data: any): string {
      const mchsCount = data.mchs?.length || 0;
      const kazhydrometCount = data.kazhydromet?.length || 0;

      if (mchsCount > 0 || kazhydrometCount > 0) {
        return this.translate.instant('NOTES_WITH_DATA', { mchsCount, kazhydrometCount });
      }
      return this.translate.instant('NO_ACTIVE_WARNINGS');
    }

    private loadMockData() {
      this.forecastData = {
        regionId: this.regionId || '1',
        forecastDate: "2026-04-20",
        riskLevel: "LOW",
        notes: "Тестовые данные: Уровень воды в норме.",
        sources: [
          {
            name: "МЧС РК",
            url: "https://www.gov.kz/memleket/entities/emergency?lang=ru"
          },
          {
            name: "Казгидромет",
            url: "https://www.kazhydromet.kz"
          }
        ]
      };
      this.loading = false;
    }
  }