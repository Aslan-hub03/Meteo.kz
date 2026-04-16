# Meteo.Kaz - Система мониторинга паводков

Система мониторинга паводковой обстановки и погодных условий в Казахстане с использованием живых данных МЧС и Казгидромета.

## 🚀 Возможности

- **Живые данные погоды** по регионам Казахстана
- **Прогнозы паводков** с официальных источников
- **Места сбора** и центры помощи
- **Многоязычная поддержка** (Русский/Казахский)
- **Адаптивный дизайн** для всех устройств
- **Автоматическое обновление** данных с Kazhydromet

## 🛠 Технологии

- **Frontend**: Angular 16, TypeScript, SCSS
- **Backend**: Node.js, Express.js
- **Парсинг**: Cheerio, Axios
- **Локализация**: ngx-translate
- **Деплой**: GitHub Pages, GitHub Actions

## 📦 Установка и запуск

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/meteo-kaz.git
cd meteo-kaz
```

2. Установите зависимости:
```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Запустите backend:
```bash
cd backend
node server.js
```

4. Запустите frontend:
```bash
cd frontend
npm start
```

5. Откройте http://localhost:4201

### Продакшн сборка

```bash
cd frontend
npm run build
```

## 🌐 Деплой

Проект автоматически деплоится на GitHub Pages при пуше в main ветку через GitHub Actions.

## 📊 Источники данных

- **МЧС РК**: https://www.gov.kz/memleket/entities/emergency
- **Казгидромет**: https://www.kazhydromet.kz
- **Метеобазы**: https://meteo.kazhydromet.kz
- **Туристические прогнозы**: https://www.kazhydromet.kz/ru/weather/touristic_city

## 🤝 Вклад в проект

1. Fork проект
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT.

## 📞 Контакты

- Email: info@meteo-kaz.kz
- Сайт: https://meteo-kaz.kz

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка и запуск

1. **Клонируйте репозиторий**
   ```bash
   git clone <repository-url>
   cd kazproject
   ```

2. **Установите зависимости frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Установите зависимости backend**
   ```bash
   cd ../backend
   npm install
   ```

4. **Запустите backend сервер**
   ```bash
   npm start
   ```
   Сервер запустится на http://localhost:3000

5. **Запустите frontend сервер** (в новом терминале)
   ```bash
   cd ../frontend
   npm start
   ```
   Приложение будет доступно на http://localhost:4200 (или другом порту, если 4200 занят)

## API Endpoints

### GET /api/flood-data
Возвращает данные о паводках из официальных источников.

**Ответ:**
```json
{
  "mchs": [
    {
      "title": "Предупреждение о возможных паводках",
      "content": "В связи с таянием снега...",
      "link": "https://www.gov.kz/...",
      "source": "МЧС РК",
      "date": "16.04.2026"
    }
  ],
  "kazhydromet": [
    {
      "region": "Северный Казахстан",
      "forecast": "Ожидаются осадки...",
      "source": "Казгидромет",
      "date": "16.04.2026"
    }
  ],
  "timestamp": "2026-04-16T15:14:57.588Z",
  "note": "Показаны демонстрационные данные..."
}
```

## Структура проекта

```
kazproject/
├── frontend/          # Angular приложение
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── forecast/     # Компонент прогноза
│   │   │   │   ├── about/        # О паводках
│   │   │   │   └── home/         # Главная страница
│   │   │   ├── services/         # Сервисы
│   │   │   └── shared/           # Общие компоненты
│   │   └── assets/i18n/          # Переводы
│   └── ...
├── backend/           # Node.js API сервер
│   ├── server.js      # Основной сервер
│   └── package.json
└── README.md
```

## Источники данных

- **МЧС РК**: https://www.gov.kz/memleket/entities/emergency
- **Казгидромет**: https://www.kazhydromet.kz

## Разработка

### Добавление новых источников данных

1. Обновите функции `parseMCHS()` и `parseKazhydromet()` в `backend/server.js`
2. Добавьте новые селекторы CSS для парсинга
3. Протестируйте API endpoint

### Добавление новых языков

1. Создайте новый файл в `frontend/src/assets/i18n/`
2. Добавьте язык в `app.module.ts`
3. Обновите компонент переключения языков

## Лицензия

Этот проект создан для информационных целей. Все данные берутся из официальных открытых источников.