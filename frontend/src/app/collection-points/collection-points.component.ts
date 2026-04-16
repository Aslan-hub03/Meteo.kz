import { Component } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector: 'app-collection-points',
    templateUrl: './collection-points.component.html',
    styleUrls: ['./collection-points.component.css']
  })
  export class CollectionPointsComponent {
    collectionPoints = [
      { id: 1, name: "Центр сбора в Астане", address: "г. Астана, ул. Мангили, 10", phone: "+7 (727) 123-45-67" },
      { id: 2, name: "Опорный пункт в Алматы", address: "г. Алматы, ул. Байтерек, 5", phone: "+7 (727) 987-65-43" },
    ];

    constructor(public translate: TranslateService) {
      translate.setDefaultLang('ru');
    }

    switchLanguage(lang: string) {
      this.translate.use(lang);
    }
  }